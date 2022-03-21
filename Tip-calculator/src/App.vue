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
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.<br />
    Coded by <a href="https://github.com/ksnitsky">Snitsky</a>.
  </footer>
</template>

<style lang="scss">
#app {
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

.title {
  display: block;
  width: 87px;
  height: 54px;

  margin-top: 50px;
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
}
</style>
