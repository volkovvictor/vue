<template>
  <div class="wrapper">
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import OurCoffee from "@/views/OurCoffeeView.vue";
import GoodsPageView from "@/views/GoodsPageView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ItemPageView from "@/views/ItemPageView.vue";
import ThanksView from "@/views/ThanksView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeroView,
    OurCoffee,
    GoodsPageView,
    ContactsView,
    ItemPageView,
    ThanksView,
    FooterComponent,
  },
};
</script>

<style>
</style>
