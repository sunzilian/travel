import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import api from '@/api';
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import './styles.scss'

Vue.use(ElementUI, { locale })

Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
