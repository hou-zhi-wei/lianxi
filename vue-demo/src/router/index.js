import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import classify from "../views/classify.vue"
import shopping from "../views/shopping.vue"
import my from "../views/my.vue"
import xiangqing from "../views/xiangqing.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/Home"
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path:"/classify",
    component:classify
  },
  {
    path:"/shopping",
    component:shopping
  },
  {
    path:'/my',
    component:my
  },
  {
    path:"/xiangqing",
    component:xiangqing
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
