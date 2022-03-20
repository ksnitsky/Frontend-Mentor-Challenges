<script setup>
import { ref } from 'vue'
import { isNum } from '../helpers/helpers'

const emit = defineEmits(['setTip'])
const isInvalid = ref(false)
const tip = ref(0)

function checkValue(value) {
  tip.value = value != '' && value >= 0 && value <= 100 ? parseInt(value) : 0
  emit('setTip', tip.value)
}

function customTip(value) {
  if (!(isInvalid.value = value != '' && value >= 0 && value <= 100 ? false : true)) {
    tip.value = value
    emit('setTip', tip.value)
  }
}
</script>

<template>
  <div class="tip">
    <label class="tip__label" for="tip__choice">Select Tip %</label>
    <div class="tip__choice">

      <div class="amount-button">
        <input
          @click="$emit('setTip', $event.target.value)"
          v-model="tip"
          type="radio"
          name="tip-percent"
          :value="5"
          id="choice-5"
        />
        <label for="choice-5">5%</label>
      </div>
      
      <div class="amount-button">
        <input
          @click="$emit('setTip', $event.target.value)"
          v-model="tip"
          type="radio"
          name="tip-percent"
          :value="10"
          id="choice-10"
        />
        <label for="choice-10">10%</label>
      </div>

      <div class="amount-button">
        <input
          @click="$emit('setTip', $event.target.value)"
          v-model="tip"
          type="radio"
          name="tip-percent"
          :value="15"
          id="choice-15"
        />
        <label for="choice-15">15%</label>
      </div>

      <div class="amount-button">
        <input
          @click="$emit('setTip', $event.target.value)"
          v-model="tip"
          type="radio"
          name="tip-percent"
          :value="25"
          id="choice-25"
        />
        <label for="choice-25">25%</label>
      </div>

      <div class="amount-button">
        <input
          @click="$emit('setTip', $event.target.value)"
          v-model="tip"
          type="radio"
          name="tip-percent"
          :value="50"
          id="choice-50"
        />
        <label for="choice-50">50%</label>
      </div>

      <div class="amount-button">
        <input type="radio" name="tip-percent" id="choice-custom">
        <input
          @keypress="isNum($event, 'pt')"
          @click="checkValue($event.target.value)"
          @change="customTip($event.target.value)"
          :class="{ invalid: isInvalid }"
          type="text"
          name="tip-percent"
          placeholder="Custom"
          id="choice-custom"
          maxlength="3"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.tip {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__label {
    text-align: left;
  }

  &__choice {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .amount-button {

      #choice-custom {
        width: 100%;

        border: none;
        background-color: variables.$very-light-grayish-cyan;
        border-radius: 5px;
        text-align: right;
        padding: 0 15px 0 10px;
      }

      label, #choice-custom {
        line-height: 50px;
        font-size: 24px;
        cursor: pointer;
      }

      label {
        display: inline-block;
        cursor: pointer;
        padding: 0px 15px;
        width: 100%;
        background-color: variables.$very-dark-cyan;
        color: variables.$very-light-grayish-cyan;
        border-radius: 5px;
        user-select: none;
        text-align: center;

        &:active {
          box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.4);
        }
      }

      input[type="radio"] {
        display: none;

        &:checked + label {
          background: variables.$strong-cyan;
          color: variables.$very-dark-cyan;
        }
      }
    }
  }
}
</style>
