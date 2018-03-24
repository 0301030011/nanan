import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import aboutus from '@/components/aboutus'
import persionalgo from '@/components/persionalgo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path:'/aboutus',
      name:'aboutus',
      component: aboutus
    },
    {
      path:'/persionalgo',
      name:'persionalgo',
      component: persionalgo
    }
  ]
})
