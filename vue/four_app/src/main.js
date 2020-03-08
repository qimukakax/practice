import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/rem.js'
import '@/assets/js/reset.css'
import { Tabbar, TabbarItem, Icon, NavBar } from 'vant';
import 'vant/lib/index.css';


Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar);
Vue.config.productionTip = false

Vue.config.devtools = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
