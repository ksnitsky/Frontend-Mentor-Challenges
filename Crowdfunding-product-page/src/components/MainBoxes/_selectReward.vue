<script setup>
const data = defineProps({
  title: String,
  price: Number,
  description: String,
  amountLeft: Number
})
</script>

<template lang="pug">
.selectReward(:class="{ runOut: data.amountLeft == 0 }")
  div(class="flex flex-col sm:flex-row sm:justify-between")
    h3.font-bold {{ title }}
    span(class="text-moderateCyan font-bold")
      | Pledge ${{ price }} or more

  div
    p {{ description }}

  div(class="flex flex-col sm:flex-row sm:justify-between gap-5")
    div(class="flex items-center")
      span.amount {{ amountLeft }}
      span(class="text-darkGray font-sans font-normal ml-2")
        | left
    div
      button(class="px-7 py-3 rounded-full bg-moderateCyan text-white font-medium")
        | {{ data.amountLeft == 0 ? 'Out of Stock' : 'Select reward' }}

</template>

<style lang="postcss">
.selectReward {
  @apply p-5 sm:p-8 border border-solid rounded-md flex flex-col gap-5;

  .amount {
    @apply font-bold text-3xl text-black;
  }
}

.runOut {
  opacity: 50%;

  button {
    filter: grayscale(100%);
  }
  /* filter: grayscale(100%); */
}

</style>
