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
  routes: [
    { path: '/:pollId/:editorCode', component: App },
    { path: '/:pollId', component: App },
    { path: '/', component: App },
    { path: '/index.html/:pollId/:editorCode', component: App },
    { path: '/index.html/:pollId', component: App },
    { path: '/index.html', component: App }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')