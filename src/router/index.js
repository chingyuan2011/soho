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
import RegistTerm from '@/pages/RegistTerm'
import Coupon from '@/pages/Coupon'
import Collect from '@/pages/Collect'
import Bonus from '@/pages/Bonus'
import Member from '@/pages/Member'
import ReturnsAndRefunds from '@/pages/ReturnsAndRefunds'
import PaymentInstructions from '@/pages/PaymentInstructions'
import OrderStatus from '@/pages/OrderStatus'
import Store from '@/pages/Store'
import StoreContent from '@/pages/StoreContent'

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
    path: '/cartProcess2.html',
    name: 'CartProcess2',
    component: CartProcess2
  },
  {
    path: '/productList.html',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/productContent.html',
    name: 'ProductContent',
    component: ProductContent
  },
  {
    path: '/signup.html',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login.html',
    name: 'Login',
    component: Login
  },
  {
    path: '/member.html',
    name: 'Member',
    component: Member
  },
  {
    path: '/registTerm.html',
    name: 'RegistTerm',
    component: RegistTerm
  },
  {
    path: '/bonus.html',
    name: 'Bonus',
    component: Bonus
  },
  {
    path: '/coupon.html',
    name: 'Coupon',
    component: Coupon
  },
  {
    path: '/collect.html',
    name: 'Collect',
    component: Collect
  },
  {
    path: '/returnsAndRefunds.html',
    name: 'ReturnsAndRefunds',
    component: ReturnsAndRefunds
  },
  {
    path: '/paymentInstructions.html',
    name: 'PaymentInstructions',
    component: PaymentInstructions
  },
  {
    path: '/orderStatus.html',
    name: 'OrderStatus',
    component: OrderStatus
  },
  {
    path: '/store.html',
    name: 'Store',
    component: Store
  },
  {
    path: '/storeContent.html',
    name: 'StoreContent',
    component: StoreContent
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
