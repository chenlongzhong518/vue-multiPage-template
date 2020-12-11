import Vue from 'vue'
import App from './index.vue'
import store from '@/store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//模拟接口请求，方案一
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('#/mock')
  mockXHR()
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
