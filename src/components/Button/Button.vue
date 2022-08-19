<template>
  <button class="button" data-testid="button" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ type: String, default: '' })
  private label!: string

  @Prop({ type: Function, required: true })
  private onClick!: () => {}
}
</script>

<style>
.button {
  background-color: #e02b57;
  border: none;
  color: white;
  padding: 5px 22px;
  border-radius: 55px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: rgb(255, 130, 161);
}
</style>
