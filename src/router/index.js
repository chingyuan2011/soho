import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Contact from '@/pages/Contact'
import Member from '@/pages/Member'
import Error404 from '@/pages/Error404'
import HeaderFooter from '@/pages/HeaderFooter'
import NewsList from '@/pages/NewsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    name: 'index',
    component: Index
  },
  {
    path: '/member.html',
    name: 'member',
    component: Member
  },
  {
    path: '/contact.html',
    name: 'contact',
    component: Contact
  },
  {
    path: '/news/list.html',
    name: 'newsList',
    component: NewsList
  },
  {
    path: '/404.html',
    name: 'error404',
    component: Error404
  },
  {
    path: '/header+footer.html',
    name: 'HeaderFooter',
    component: HeaderFooter
  },
  {
    path: '*',
    redirect: { name: 'error404' }
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
