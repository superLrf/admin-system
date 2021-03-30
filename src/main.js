// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import Storage from '@/utils/StorageUtil'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 定义全局变量
Vue.prototype.Storage = Storage

Vue.config.productionTip = false

// 路由拦截
router.beforeEach((to, from, next) => {
  const user = Storage.session.get('user')
  // 如果没有存在用户并且path不等于/admin/login，则重新调到admin/login
  if(!user && to.path.indexOf('/admin/login') === -1) {
    ElementUI.Message.info("您还未登录，请先登录！")
    setTimeout(() => {
      router.replace('/admin/login')
    }, 400)
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
