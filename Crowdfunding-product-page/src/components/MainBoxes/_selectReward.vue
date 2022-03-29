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
div(class="p-5 md:p-8 border border-solid rounded-md flex flex-col gap-5")
  div(class="flex flex-col lg:flex-row lg:justify-between")
    h4.font-bold {{ title }}
    span(class="text-moderateCyan font-bold")
      | Pledge ${{ price }} or more

  div
    p {{ description }}

  div(class="flex flex-col md:flex-row md:justify-between gap-5")
    div(class="flex items-center")
      span.amount {{ amountLeft }}
      span(class="text-darkGray font-sans font-normal ml-2")
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
