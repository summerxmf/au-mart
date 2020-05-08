import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n/i18n";
import "assets/scss/index.scss";
// import fastclick from 'fastclick';

// ElementUi
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// fastclick.attach(document.body);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
