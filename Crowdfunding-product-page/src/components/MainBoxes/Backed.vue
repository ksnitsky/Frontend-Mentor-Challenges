<template lang="pug">
.box(class="gap-6 text-center md:text-left")#discover
  .stats
    div
      h2 $89,914
      p of $100,000 backed
    hr/

    div
      h2 5,007
      p total backers
    hr/

    div
      h2 56
      p days left

  .progressBar(class="w-full bg-lightGray rounded-md h-2.5")
    .progressBar__line(class="bg-moderateCyan h-2.5 rounded-md")

</template>

<style lang="postcss">
/* TODO: ^ fix layout */
.stats {
  @apply w-full flex flex-col md:flex-row gap-5 items-center;

  hr {
    @apply w-24 h-px md:w-px md:h-10 border-none bg-borderGray;
  }

  h2 {
    @apply text-3xl font-bold;
  }

  p {
    @apply text-sm text-darkGray;
  }
}

.progressBar__line {
  width: calc(89914/100000 * 100%);
}
</style>
