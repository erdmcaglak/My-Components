import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Work from "@/components/Work.vue"
import Work1 from "@/components/Work1.vue"
import Work2 from "@/components/Work2.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Home,
  },
  {
    path:'/about',
    component:About,
  },
  {
    path:'/work',
    component:Work,
    children:[
      {path:'work1',component:Work1},
      {path:'work2',component:Work2},
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
