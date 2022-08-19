<template>
  <div class="container">
    <Loading :loading="loading" />
    <h1 v-if="transactions.length === 0 && !loading">Não contem transações com este filtro.</h1>
    <table v-else-if="!loading">
      <thead>
        <tr>
          <template v-for="item of TitleOptions">
            <th :key="item.id">{{ item.title }}</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction of transactions" :key="transaction.id">
          <td>{{ transaction.title }}</td>
          <td>{{ transaction.description }}</td>
          <td>
            <Chip :statusText="transaction.status" />
          </td>
          <td>{{ transaction.amount | moneyFormat }}</td>
          <td>
            <Button :label="'Ver transactions'" :onClick="() => onClick(transaction)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ITransaction } from '@/types/Transaction'
import { moneyFormat } from '@/helper/Money'
import Button from '@/components/Button/Button.vue'
import Chip from '@/components/Chip/Chip.vue'
import Loading from '@/components/Loading/Loading.vue'
import { titleOptions } from './TableHelpers'

@Component({
  components: {
    Button,
    Chip,
    Loading
  },
  filters: {
    moneyFormat
  }
})
export default class TableComponent extends Vue {
  @Prop({ type: Array, required: true })
  private transactions!: ITransaction;

  @Prop({ type: Boolean, required: true })
  private loading!: boolean;

  private onClick(transaction: ITransaction) {
    this.$emit('onClick', transaction)
  }

  private get TitleOptions() {
    return titleOptions
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
