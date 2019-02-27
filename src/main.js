import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post,fetch,patch,put} from './components/base/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
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
