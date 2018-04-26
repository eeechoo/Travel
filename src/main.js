// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'// 解决移动端点击事件300ms延迟问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'// 解决不同手机型号默认渲染效果不同问题
import 'styles/border.css'// 解决多倍屏 1像素边框问题
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
