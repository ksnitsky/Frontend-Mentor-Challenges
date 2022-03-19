<script setup>
  import { ref } from "vue";
  import { isNum } from "../helpers/helpers";

  defineProps(['isInvalid'])
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
      @change="$emit('setPeople', $event.target.value)"
      type="text"
      name="people-count"
      id="people-count"
      minlength="0"
      maxlength="3"
      :class="{ invalid: isInvalid }"
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
  }
}
</style>
