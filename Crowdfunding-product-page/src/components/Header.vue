<template lang="pug">
header
  .navbar(class="flex justify-between items-center w-11/12 pt-8")
    h1
      img(src="../assets/images/logo.svg" alt="crowdfund")/

    .menuHamburger(class="bg-hamburgerMenu w-[16px] h-[15px] cursor-pointer md:hidden")
    .menuNormal(class="hidden md:flex text-white")
      nav
        ol.list-none
          li 
            a(href="#about") About
          li 
            a(href="#discover") Discover
          li
            a(href="#getStarted") Get Started

</template>

<style>
header {
  @apply w-full h-76 md:h-100
    flex items-start justify-center
    bg-mobileImg md:bg-desktopImg bg-center bg-no-repeat;
}
</style>