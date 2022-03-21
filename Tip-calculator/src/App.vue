<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Container from './components/Container.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <Header />

    <Container />

    <Footer />
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  background-color: variables.$light-grayish-cyan;

  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: space-around;
  align-items: center;

  gap: 30px;

  @media (min-width: 900px) {
    gap: unset;
  }
}
</style>
