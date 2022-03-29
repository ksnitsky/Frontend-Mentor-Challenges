<template lang="pug">
.box(class="gap-6 text-center md:text-left")#discover
  div(class="flex flex-col md:flex-row md:justify-between gap-5 items-center")
    .stats
      h2 $89,914
      p of $100,000 backed
    hr
    .stats
      h2 5,007
      p total backers
    hr
    .stats
      h2 56
      p days left
  .progressBar(class="w-full bg-lightGray rounded-md h-2.5")
    .progressBar__line(class="bg-moderateCyan h-2.5 rounded-md")
</template>

<script>

</script>

<style lang="postcss">
#discover {
  hr {
    @apply w-24 md:w-px md:h-16;
  }
}

.stats {

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
