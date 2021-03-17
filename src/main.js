import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;
//引入vant
import './conponents/vant/vant'

//rem
import 'lib-flexible/flexible.js'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
