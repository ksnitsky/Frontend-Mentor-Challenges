<script setup>
  import Bill from "./_bill.vue";
  import Tip from "./_tip.vue";
  import People from "./_people.vue";
  import Result from "./_result.vue";
  import { ref } from "vue";

  const data = ref({
    billAmount:     0,
    tipPercent:     15,
    numberOfPeople: 1
  })
  const isInvalid = ref(false)

  // TODO: эту штуку перенести обратно в _people
  function peopleCount(count) {
    isInvalid.value = count >= 1 ? false : true
    if (!isInvalid.value)
      data.value.numberOfPeople = parseInt(count)
  }

</script>

<template>
  <div class="container">
    <div class="container__calculate">
      <!-- Если это стереть после ввода, то NaN -->
      <Bill
        @setBill="(e) => data.billAmount = parseFloat(e)"
      />
      <Tip
        @setTip="(e) => data.tipPercent = parseInt(e)"
      />
      <People
        :is-invalid="isInvalid"
        @setPeople="peopleCount"
      />
    </div>

    <div class="container__result">
      <Result
        v-bind="data"
      />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 920px;
  padding: 40px 30px;
  background-color: variables.$white;
  color: variables.$dark-grayish-cyan;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;

  &__calculate {
    display: flex;
    flex: 1;
    flex-direction: column;

    gap: 30px;
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
