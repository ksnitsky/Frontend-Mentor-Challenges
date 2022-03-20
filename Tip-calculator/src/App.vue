<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Container from './components/Container.vue';
</script>

<template>
  <header>
    <h1 class="title">
      <img src="./assets/images/logo.svg" alt="SPLITTER">
    </h1>
  </header>
  <main>
    <Container />
  </main>
  <footer class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/ksnitsky">Snitsky</a>.
  </footer>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  background-color: variables.$light-grayish-cyan;
}

.title {
  display: block;
  width: 87px;
  height: 54px;

  @media (max-width: 650px) {
    margin: 40px 0;
  }
}

.attribution {
  font-size: 11px;
  text-align: center;
  width: 100%;

  a {
    color: variables.$dark-grayish-cyan;

    &:hover {
      color: variables.$strong-cyan;
    }
  }

  @media (max-width: 650px) {
    margin: 10px 0;
  }
}
</style>
