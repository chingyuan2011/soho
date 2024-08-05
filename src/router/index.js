import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Header from '@/pages/Header'
import Footer from '@/pages/Footer'
import CartProcess1 from '@/pages/CartProcess1'
import CartProcess2 from '@/pages/CartProcess2'
import ProductContent from '@/pages/ProductContent'
import ProductList from '@/pages/ProductList'
import Login from '@/pages/Login'
import SignUp from '@/pages/SignUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    name: 'index',
    component: Index
  },
  {
    path: '/header.html',
    name: 'Header',
    component: Header
  },
  {
    path: '/footer.html',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/cartProcess1.html',
    name: 'CartProcess1',
    component: CartProcess1
  },
  {
    path: '/productContent.html',
    name: 'ProductContent',
    component: ProductContent
  },
  {
    path: '/productList.html',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/login.html',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup.html',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/cartProcess2.html',
    name: 'CartProcess2',
    component: CartProcess2
  },
  {
    path: '*',
    redirect: { name: 'index' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
