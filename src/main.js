import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueRouter from 'vue-router'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080'

new Vue({
  axios,
  router:router,
  render: h => h(App)
}).$mount('#app')
