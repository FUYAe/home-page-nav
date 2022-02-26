import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SitesMain from "@/pages/SitesMain.vue"
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/more',
    name: 'more',
    component: SitesMain
  }
  , {
    path: '/',
    name: 'home',
    component: SitesMain
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.fullPath === "/more") {

    store.state.moreShow = true
  }

  next()
})
router.afterEach((to, from) => {


})

export default router
