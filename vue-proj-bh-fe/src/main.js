import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueRouter)
Vue.use(VueApexCharts)
 
Vue.component('apex-chart', VueApexCharts)

const router = new VueRouter({
  routes: [
    { path: '/:pollId/:editorCode', component: App }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')