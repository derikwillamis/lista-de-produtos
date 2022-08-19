<template>
  <div class="chip" :style="{ backgroundColor: displayText.color }">{{displayText.label}}</div>
</template>

<script lang="ts">
import { StatusOptions } from '@/types/Transaction'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { formatedStatus } from './ChipHelper'

@Component
export default class Chip extends Vue {
  @Prop({ type: String, required: true })
  private statusText!: StatusOptions

  private get displayText() {
    return formatedStatus(this.statusText)
  }
}
</script>

<style scoped>
.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  border-radius: 25px;
  color: white;
  border: 1px solid #e32d55;
}
</style>
