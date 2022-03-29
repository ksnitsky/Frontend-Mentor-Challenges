<script setup>
import TitleBox from './MainBoxes/Title.vue'
import BackedBox from './MainBoxes/Backed.vue'
import AboutBox from './MainBoxes/About.vue'
</script>

<template lang="pug">
main

  TitleBox/

  BackedBox/

  AboutBox/

</template>

<style>
main {
 @apply mt-[-3.5rem] w-11/12 md:max-w-[45.5rem]
  flex flex-col gap-5 items-center self-center;
}
</style>
