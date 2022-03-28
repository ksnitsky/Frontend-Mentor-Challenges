<template lang="pug">
header
  .navbar(class="flex justify-between items-center w-11/12 pt-8")
    h1
      img(src="../assets/images/logo.svg" alt="crowdfund")
    .menu(class="bg-hamburgerMenu w-[16px] h-[15px] cursor-pointer")

</template>

<style>
header {
  @apply w-full h-76 desktop:h-100
    flex items-start justify-center
    bg-mobileImg xl:bg-desktopImg bg-center bg-no-repeat;
}
</style>