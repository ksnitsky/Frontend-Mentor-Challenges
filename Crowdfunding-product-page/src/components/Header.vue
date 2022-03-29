<template lang="pug">
header
  .navbar(class="flex justify-between items-center w-11/12 pt-8")
    h1
      img(src="../assets/images/logo.svg" alt="crowdfund")
    .menuHamburger(class="bg-hamburgerMenu w-[16px] h-[15px] cursor-pointer")
    .menuNormal
      nav
        ol
          li 
            a(href="#") link
          li 
            a Discover


</template>

<style>
header {
  @apply w-full h-76 desktop:h-100
    flex items-start justify-center
    bg-mobileImg md:bg-desktopImg bg-center bg-no-repeat;
}
</style>