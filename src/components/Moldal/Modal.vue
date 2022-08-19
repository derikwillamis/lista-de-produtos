<template>
  <div v-if="showModal">
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="status">
          <h2>Solicitada</h2>
          <h2>Processando</h2>
          <h2>Concluída</h2>
        </div>
        <div>
          <div class="porcentage">
            <div class="progress-bar" :style="{ width: progressPercentage }"></div>
          </div>
        </div>
        <div>
          <h2>Transferido de {{ modal.to }} - {{ modal.amount | moneyFormat }}</h2>
          <hr />
        </div>
        <div>
          <h2>Para {{ modal.from }} - {{ modal.amount | moneyFormat }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { moneyFormat } from '@/helper/Money'
import { formatedStatus } from '@/helper/StatusHelper'

import { IModalTypes } from './ModalTypes'

@Component({
  filters: {
    moneyFormat
  },
})
export default class Modal extends Vue {
  private modal!: IModalTypes
  private progressPercentage!: string
  private showModal = false

  public openModal(): void {
    this.showModal = true
  }

  public closeModal(): void {
    this.showModal = false
  }

  public setProgressPercentage(value: string): void {
    this.progressPercentage = value
  }

  public setTransaction({ status, amount, from, to }: IModalTypes): void {
    const transaction = { status, amount, from, to }
    this.modal = transaction
  }

  private getStatusBarText() {

  }

  private get transactionStatus() {
    return formatedStatus(this.modal.status)
  }
}
</script>

<style>
.porcentage {
  height: 25px;
  background-color: #ccc;
  position: relative;
}

.porcentage .progress-bar {
  position: absolute;
  height: 100%;
  background-color: #0fd439;
  width: 55%;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 30px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding-bottom: 15px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.status {
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
}
</style>
