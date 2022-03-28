<template lang="pug">
.box(class="gap-4 text-center")
  .stats
    h2 $89,914
    p of $100,000 backed
  .stats
    h2 5,007
    p total backers
  .stats
    h2 56
    p days left
  .progressBar(class="w-full bg-lightGray rounded-md h-2.5")
    .progressBar__line(class="bg-moderateCyan h-2.5 rounded-md")
</template>

<script>

</script>

<style lang="postcss">
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
