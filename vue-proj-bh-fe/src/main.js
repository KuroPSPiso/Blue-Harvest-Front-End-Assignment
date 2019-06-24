import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(VueApexCharts)
Vue.use(Vuex)
 
Vue.component('apex-chart', VueApexCharts)

const router = new VueRouter({
  base: '/Blue-Harvest-Front-End-Assignment/',
  routes: [
    { path: '/:pollId/:editorCode', component: App },
    { path: '/:pollId', component: App }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')