<script setup>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Container from './components/Container.vue';
</script>

<template>
  <div class="title">
    <h1>
      SPLI<br>
      TTER
    </h1>
  </div>
  <Container />
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/ksnitsky">Snitsky</a>.
  </div>
</template>

<style lang="scss">
#app {

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  min-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  background-color: variables.$light-grayish-cyan;
}

.title {
  color: variables.$very-dark-cyan;
  letter-spacing: 10px;
  text-align: center;
}

.attribution {
  font-size: 11px;
  text-align: center;
  width: 100%;

  a {
    color: variables.$very-dark-cyan;
  }

  @media (max-width: 650px) {
    margin-top: 15px;
  }
}
</style>
