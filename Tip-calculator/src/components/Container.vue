<script setup>
import Bill from "./_bill.vue";
import Tip from "./_tip.vue";
import People from "./_people.vue";
import Result from "./_result.vue";
import { ref } from "vue";

const data = ref({
  billAmount: 0,
  tipPercent: 0,
  numberOfPeople: 1
})

function resetInput(e) {
  data.value = {
    billAmount: 0,
    tipPercent: 0,
    numberOfPeople: 1
  }
}
</script>

<template>
  <form class="container" v-on:reset="resetInput">
    <section class="container__calculate">
      <Bill
        @setBill="(e) => data.billAmount = e"
      />
      <Tip
        @setTip="(e) => data.tipPercent = parseInt(e)"
      />
      <People
        @setPeople="(e) => data.numberOfPeople = e"
      />
    </section>

    <section class="container__result">
      <Result
        v-bind="data"
      />
    </section>
  </form>
</template>

<style lang="scss">
.container {
  padding: 30px;
  background-color: variables.$white;
  color: variables.$dark-grayish-cyan;
  margin: 0 auto;
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  gap: 30px;

  &__calculate {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;

    gap: 30px;
    padding: 10px;
  }

  &__result {
    display: flex;
    flex: 1 1 100%;
  }
}

@media (min-width: 900px) {
  .container {
    flex-direction: row;
    width: 900px;

    max-width: 100%;
  }
}
</style>
