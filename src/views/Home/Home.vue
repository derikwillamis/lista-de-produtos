<template>
  <div>
    <div class="header">
      <InputComponent
        placeholder="Buscar por titulo"
        @input="inputText"
      />
      <Select @onSelect="setSelectedOption" :options="statusOptions"/>
    </div>
    <TableComponent
      @onClick="openModal"
      :loading="loading"
      :transactions="transactionsFilter"
    />
    <Modal ref="modalRef"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'

import InputComponent from '@/components/Input/InputComponent.vue'
import Select from '@/components/Select/Select.vue'
import TableComponent from '@/components/Table/TableComponent.vue'
import Modal from '@/components/Moldal/Modal.vue'

import TransactionFactory from '@/service/TransactionFactory'
import { ITransaction } from '@/types/Transaction'

import { IOption } from '@/components/Select/SelectTypes'
import { percentageProgress } from './HomeHelpers'

const transactioFactory = TransactionFactory.get('transactionRepository')

@Component({
  components: {
    InputComponent,
    Select,
    TableComponent,
    Modal,
  },
})
export default class Home extends Vue {
  @Ref() readonly modalRef!: Modal

  private loading = true;
  private title = '';
  private selectedStatus = ''

  private transactions: ITransaction[] = []
  private transactionsFilter: ITransaction[] = []

  private get statusOptions(): IOption[] {
    return [
    {
      value: "",
      label: "Todos"
    },
    {
      value:"processing",
      label:"Processando"
    },
    {
      value:"processed",
      label:"Solicitada"
    },
    {
      value:"created",
      label:"Concluída"
    }]
  }
  private setSelectedOption(value: string) {
    this.selectedStatus = value
  }

  @Watch('title')
  @Watch('selectedStatus')
  private filterTransaction() {
    const itens = this.transactions.filter((item) =>
      item.status.toLowerCase().indexOf(this.selectedStatus.toLowerCase()) > -1 &&
      item.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1
    )

    this.transactionsFilter = itens
  }

  private closeModal() {
    this.modalRef.closeModal()
  }

  private inputText(value: string) {
    this.title = value
  }

  private openModal(transaction: ITransaction) {
    const porcentageProgress = percentageProgress(transaction.status)
    this.modalRef.setProgressPercentage(porcentageProgress)

    const transactioModal = {
      status: transaction.status,
      title: transaction.title,
      amount: transaction.amount,
      from: transaction.from,
      to: transaction.to
    }
    this.modalRef.setTransaction(transactioModal)

    this.modalRef.openModal()
  }

  private mounted() {
    transactioFactory
      .getAll()
      .then((itens) => {
        this.transactionsFilter = itens
        this.transactions = itens
        this.loading = false
      })
      .catch(() => alert('Erro ao carregar a pagina tente novamente mais tarde!'))
  }
}
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20px;
  padding-top: 20px;
  width: 50%;
}
</style>
