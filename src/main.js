import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post,fetch,patch,put} from './components/base/request'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
