import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import filters from './filters'

import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
   store,
   router,
   filters,
   render: h => h(App),
}).$mount('#app')
