<script setup>
import { ref } from "vue"

const props = defineProps({
                billAmount:     Number,
                tipPercent:     Number,
                numberOfPeople: Number
              })
const total = ref(0)
defineEmits(['resetButton'])

function totalTips() {
  total.value = (props.billAmount * (props.tipPercent == 0 ? 1 : props.tipPercent / 100)) / props.numberOfPeople
  return total.value.toLocaleString("en-US", {style:"currency", currency:"USD"})
}

function totalBill() {
  return (
    total.value + (props.billAmount / props.numberOfPeople)
  ).toLocaleString("en-US", {style:"currency", currency:"USD"})
}
</script>

<template>
  <div class="result">

    <div class="top">
      <div class="amount-line">
        <div class="amount-line__left">
          <p class="left-title">Tip Amount</p>
          <p class="left-person">/ person</p>
        </div>

        <div class="amount-line__right">
          <span>
            {{ totalTips() }}
          </span>
        </div>
      </div>

      <div class="amount-line">
        <div class="amount-line__left">
          <p class="left-title">Total</p>
          <p class="left-person">/ person</p>
        </div>
        <div class="amount-line__right">
          <span>
            {{ totalBill() }}
          </span>
        </div>
      </div>
    </div>

    <button
      type="reset"
      class="reset-button"
      :disabled="props.billAmount <= 0"
    >
      RESET
    </button>

  </div>
</template>

<style lang="scss">
.result {
  width: 100%;

  background: variables.$very-dark-cyan;
  border-radius: 12px;

  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 30px;

  .top {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .amount-line {
      display: flex;
      flex-wrap: wrap;

      &__left {
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1 1 32%;

        .left-title {
          color: variables.$very-light-grayish-cyan;
          font-size: 14px;

          @media (min-width: 900px) {
            font-size: 16px;
          }
        }

        .left-person {
          font-size: 12px;
        }
      }

      &__right {
        color: variables.$strong-cyan;
        font-size: 28px;
        text-align: right;
        display: flex;

        flex: 1 1 65%;
        width: 100%;

        span {
          width: 100%;
        }
      }
    }

    @media (min-width: 900px) {
      gap: 50px;
    }
  }

  .reset-button {
    display: block;
    padding: 10px 0;
    background-color: variables.$strong-cyan;
    color: variables.$very-dark-cyan;
    border: none;
    border-radius: 5px;

    font-size: 18px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.4);
    }

    &:disabled,
    [disabled] {
      opacity: 30%;
      cursor: auto;
    }
  }
}
</style>
