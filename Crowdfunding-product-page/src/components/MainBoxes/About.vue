<script setup>
import SelectReward from './_selectReward.vue';
</script>

<template lang="pug">
.box(class="text-left gap-8 mb-12")#about
  h2(class="w-full text-left")
    | About this project

  p(class="w-full text-left")
    | The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
    | that elevates your screen to a more comfortable viewing height.
    | Placing your monitor at eye level has the potential to improve your
    | posture and make you more comfortable while at work,
    | helping you stay focused on the task at hand.

  p(class="w-full text-left")
    | Featuring artisan craftsmanship,
    | the simplicity of design creates extra desk space below your computer
    | to allow notepads, pens, and USB sticks to be stored under the stand.

  SelectReward(
    title="Bamboo Stand"
    :price="25"
    description="You get an ergonomic stand made of natural bamboo.\
      You've helped us launch our promotional campaign,\
      and you’ll be added to a special Backer member list."
    :amountLeft="101"
  ) /

  SelectReward(
    title="Black Edition Stand"
    :price="75"
    description="You get a Black Special Edition computer stand\
      and a personal thank you. You’ll be added to our Backer\
      member list. Shipping is included."
    :amountLeft="64"
  ) /

  SelectReward(
    title="Mahogany Special Edition"
    :price="200"
    description="You get two Special Edition Mahogany stands, a Backer T-Shirt,\
      and a personal thank you. You’ll be added\
      to our Backer member list. Shipping is included."
    :amountLeft="0"
  ) /

</template>
