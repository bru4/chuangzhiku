import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './config/mock'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/styles/app.scss'
import './assets/styles/common.scss'

Vue.use(iView)

Vue.config.productionTip = false

const vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

vue
