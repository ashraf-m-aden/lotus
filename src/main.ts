import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";
import "./assets/scss/app.scss";
import "./assets/scss/admin.scss";
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueAxios, axios);
app.use(Vue3Toastify, {
  autoClose: 3000,
} as ToastContainerOptions);
app.use(VueApexCharts);
app.use(router).mount("#app");
