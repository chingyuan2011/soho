import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Header from '@/pages/Header'
import Footer from '@/pages/Footer'


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
