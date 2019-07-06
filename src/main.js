import Vue from 'vue'
import App from './App'
import router from './router'

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

//引入resource
import VueResource from 'vue-resource'
//声明使用
Vue.use(VueResource)

import 'xterm/dist/xterm.css'



//  配置axios
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
