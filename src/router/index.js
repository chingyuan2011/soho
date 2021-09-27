import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Contact from '@/pages/Contact'
import Member from '@/pages/Member'
import Error404 from '@/pages/Error404'
import HeaderFooter from '@/pages/HeaderFooter'
import NewsList from '@/pages/NewsList'
import NewsContent from '@/pages/NewsContent'
import MenuList from '@/pages/MenuList'
import MenuContent from '@/pages/MenuContent'
import ShopList from '@/pages/ShopList'
import ShopContent from '@/pages/ShopContent'
import PageEvent from '@/pages/Event'

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
    path: '/news/content.html',
    name: 'newsContent',
    component: NewsContent
  },
  {
    path: '/menu/list.html',
    name: 'menuList',
    component: MenuList
  },
  {
    path: '/menu/content.html',
    name: 'menuContent',
    component: MenuContent
  },
  {
    path: '/shop/list.html',
    name: 'shopList',
    component: ShopList
  },
  {
    path: '/shop/content.html',
    name: 'shopContent',
    component: ShopContent
  },
  {
    path: '/404.html',
    name: 'error404',
    component: Error404
  },
  {
    path: '/event.html',
    name: 'event',
    component: PageEvent
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
