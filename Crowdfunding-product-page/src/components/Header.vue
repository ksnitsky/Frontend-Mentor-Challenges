<template lang="pug">
header
  .navbar(class="flex justify-between items-center w-11/12 pt-8")
    h1
      img(
        src="../assets/images/logo.svg"
        alt="crowdfund"
        width="128"
        height="20"
      )/

    .menuHamburger(
      class="bg-hamburgerMenu w-[16px] h-[15px] cursor-pointer md:hidden"
    )
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

<style lang="postcss">
header {
  /*
    w-screen probably fix sh.. with overflow-y 
    no. its not.
    (idk its work like: 
          "i want to overflow
          **reload**
          i don't want to overflow
          **reload**
          i want to overflow") -- ?????

    sometimes its okay, but sometimes its shifts to the right
  */
  @apply w-screen max-w-full h-76 md:h-100
    flex items-start justify-center
    bg-mobileImg md:bg-desktopImg bg-center bg-no-repeat bg-cover;
}
</style>