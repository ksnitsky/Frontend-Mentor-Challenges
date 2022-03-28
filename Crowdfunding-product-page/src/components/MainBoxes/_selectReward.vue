<script setup>
const data = defineProps({
  title: String,
  price: Number,
  description: String,
  amountLeft: Number,
  active: Boolean
})
</script>

<template lang="pug">
div(class="p-5 border border-solid rounded-md flex flex-col gap-4")
  div
    h4.font-bold {{ title }}
    span(class="text-moderateCyan font-bold")
      | Pledge ${{ price }} or more

  div
    p {{ description }}

  div
    p
      span.amount {{ amountLeft }}
      | left

  div
    button(class="px-7 py-3 rounded-full bg-moderateCyan text-white font-medium")
      | Select Reward
</template>

<style>
.amount {
  @apply font-bold text-3xl text-black;
}
</style>
