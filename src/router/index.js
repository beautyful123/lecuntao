import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import fenlei from  '@/components/fenlei'
import login from  '@/components/login'
import shopping from  '@/components/shopping'
import mymessage from  '@/components/mymessage'
import details from  '@/components/details'
import test from  '@/components/test'
import test2 from  '@/components/test2'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {path:"/fenlei",component:fenlei},
    {path:'/login',component:login},
    {path:'/shopping',component:shopping},
    {path:'/mymessage',component:mymessage},
    {path:'/details',component:details},
    {path:'/test',component:test},
    {path:'/tes',component:test2},
  ]
})
