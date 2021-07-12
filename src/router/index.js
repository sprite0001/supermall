import Vue from 'vue'
import Router from 'vue-router'
/*import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Shopcart from '../views/shopcart/Shopcart.vue'
import Profile from '../views/profile/Profile.vue'*/

//懒加载方式 分开打包js
const  Home = () => import('../views/home/Home.vue')
const  Category = () => import('../views/category/Category.vue')
const  Shopcart = () => import('../views/shopcart/Shopcart.vue')
const  Profile = () => import('../views/profile/Profile.vue')

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },{
    path: '/category',
    component: Category
  },{
    path: '/shopcart',
    component: Shopcart
  },{
    path: '/profile',
    component: Profile
  },

]
const router = new Router({
  routes: routes,
  mode: 'history'
})

export default router
