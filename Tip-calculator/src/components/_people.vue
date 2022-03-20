<script setup>
import { ref } from "vue";
import { isNum } from "../helpers/helpers";

const emit = defineEmits(['setPeople'])
const isInvalid = ref(false)

function peopleCount(value) {
  if (!(isInvalid.value = value >= 1 ? false : true))
    emit('setPeople', parseInt(value))
}
</script>

<template>
  <div class="people">
    <div class="people__labels">
      <label for="people-count" class="n-label">Number of People</label>
      <label
        for="people-count"
        class="invalid-label"
        :style="{ display: isInvalid ? 'inline' : 'none' }"
      >
        Can't be zero
      </label>
    </div>
    <input
      @keypress="isNum($event, 'pt')"
      @change="peopleCount($event.target.value)"
      type="text"
      name="people-count"
      minlength="0"
      maxlength="3"
      :class="{ invalid: isInvalid }"
      placeholder="0"
    />
  </div>
</template>

<style lang="scss">
.people {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__labels {
    display: flex;
    justify-content: space-between;

    .invalid-label {
      color: chocolate;
    }
  }

  input {
    background-color: variables.$very-light-grayish-cyan;
    background-image: url('../assets/images/icon-person.svg');
    background-repeat: no-repeat;
    background-position: 15px;

    border: none;
    height: 45px;
    width: 100%;
    text-align: right;
    font-size: 24px;
    padding: 0 15px;

    border-radius: 5px;

    cursor: pointer;
  }
}
</style>
