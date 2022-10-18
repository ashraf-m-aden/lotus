import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Breadcrumbs from './components/bread-crumbs.vue'
import VueFeather from 'vue-feather';

import PxCard from './components/pxcard.vue';
// config for firebase
import config from '../config.json'
import VueApexCharts from 'vue-apexcharts';
import './assets/scss/app.scss'
import './assets/scss/admin.scss'
import {
  ValidationObserver,
  ValidationProvider,

} from "vee-validate";
import { extend } from 'vee-validate';

import Toasted from 'vue-toasted';
import { VueEditor } from "vue2-editor";
import VueDropzone from 'vue2-dropzone';
import "vue2-dropzone/dist/vue2Dropzone.min.css";

Vue.component('Breadcrumbs', Breadcrumbs);
Vue.use(VueFeather);
Vue.component(PxCard.name, PxCard)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

import { fb, db } from '../db.js'

Vue.use(fb)
Vue.use(db)
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(Toasted, {
  iconPack: 'fontawesome'
});
Vue.config.productionTip = false
Vue.component('VueEditor', VueEditor);
Vue.component('VueDropzone', VueDropzone);
Vue.use(VueDropzone);
Vue.use(VueEditor);

Vue.use(BootstrapVue);
Vue.component(extend)
extend('notempty', {
  validate: value => { return (value.toString()) == '' },
  message: "wrong word"
});

extend('email', value => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'Mettez un format correct pour l\'email';
  }
  // All is good
  return true;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
