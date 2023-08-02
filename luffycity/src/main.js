// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router/index"

// 加载ElementUI的对象和css资源
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册ElementUI到Vue类中
Vue.use(ElementUI);


Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  // 注册路由对象
  components: { App },
  template: '<App/>'
});
