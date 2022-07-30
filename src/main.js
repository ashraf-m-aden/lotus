import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Breadcrumbs from './components/bread-crumbs.vue'
import VueFeather from 'vue-feather';
import firebase from 'firebase/app';
import 'firebase/firestore';
import PxCard from './components/pxcard.vue';
// config for firebase
import config from '../config.json'
import VueApexCharts from 'vue-apexcharts';
import './assets/scss/app.scss'
import './assets/scss/admin.scss'

Vue.component('Breadcrumbs', Breadcrumbs);
Vue.use(VueFeather);
Vue.component(PxCard.name, PxCard)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
firebase.initializeApp(config.firebase);


Vue.config.productionTip = false


Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
