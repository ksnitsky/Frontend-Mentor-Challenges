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
    <div class="container__calculate">
      <Bill
        @setBill="(e) => data.billAmount = e"
      />
      <Tip
        @setTip="(e) => data.tipPercent = parseInt(e)"
      />
      <People
        @setPeople="(e) => data.numberOfPeople = e"
      />
    </div>

    <div class="container__result">
      <Result
        v-bind="data"
      />
    </div>
  </form>
</template>

<style lang="scss">
.container {
  max-width: 900px;
  padding: 30px;
  background-color: variables.$white;
  color: variables.$dark-grayish-cyan;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  // margin: 0 auto;
  gap: 30px;

  &__calculate {
    display: flex;
    flex: 1;
    flex-direction: column;

    gap: 30px;
    padding: 10px;
  }

  &__result {
    display: flex;
    flex: 1;
  }
}

@media (min-width: 600px) {
  .container {
    flex-direction: row;

    &__result {
      display: flex;
      flex: 1;
    }
  }
}
</style>
