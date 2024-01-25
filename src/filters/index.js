import Vue from 'vue'

Vue.filter("filterPrice", (value) => {
   return value + "$";
})