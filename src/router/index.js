import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const Login = () => import('@/views/login/Login') // 登录组件
const Welcome = () => import('@/views/welcome/Welcome') // 欢迎组件
const Admin = () => import('@/views/admin/Admin') // 管理组件
const Store = () => import('@/views/store/Store') // 店铺组件
const ManageStore = () => import('@/views/manageStore/ManageStore') // 店铺管理组件
const Rights = () => import('@/views/rights/Rights') // 权限组件
const Record = () => import('@/views/record/Record') // 权限组件

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin/login'
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/admin/container',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/store',
          name: 'Store',
          component: Store
        },
        {
          path: '/manageStore',
          name: 'ManageStore',
          component: ManageStore
        },
        {
          path: '/rights',
          name: 'Rights',
          component: Rights
        },
        {
          path: '/record',
          name: 'Record',
          component: Record
        }
      ]
    }
  ],
  mode: 'history'
})
