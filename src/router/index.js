import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from "../views/HeroView";
import OurCoffee from "../views/OurCoffeeView";
import GoodsPageView from "@/views/GoodsPageView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ItemPageView from "@/views/ItemPageView.vue";
import ThanksView from "@/views/ThanksView.vue";


Vue.use(VueRouter);

const routes = [
   { path: '/', component: HeroView },
   { path: '/ourcoffee', component: OurCoffee },
   { path: '/goodspage', component: GoodsPageView },
   { path: '/contacts', component: ContactsView },
   { path: '/thanks', component: ThanksView },
   { name: 'coffee', path: '/ourcoffee/:id', component: ItemPageView },
   { name: 'goods', path: '/goodspage/:id', component: ItemPageView },
]

const router = new VueRouter({
   mode: 'history',
   routes
})

export default router;