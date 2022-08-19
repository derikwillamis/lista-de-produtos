<template>
  <div>
    <select id="select" @click="onSelect($event.target.value)">
      <option  v-for="option of options" v-bind:key="option.label" :value="option.value" >
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IOption } from './SelectTypes'

@Component
export default class Select extends Vue {
  @Prop({ type: Array, required: true })
  private options!: IOption[]

  private onSelect(value: string) {
    this.$emit('onSelect', value)
  }
}
</script>

<style scoped>
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
