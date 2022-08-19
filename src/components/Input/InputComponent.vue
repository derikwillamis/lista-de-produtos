<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      @keypress="updateValue($event.target.value)"
      data-testid="input"
      v-bind:value="value"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class InputComponent extends Vue {
  value: string = ''
  @Prop({ type: String, required: true })
  private placeholder!: string

  updateValue(value: string) {
    this.value = value
    this.$emit('input', value)
  }
}
</script>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
