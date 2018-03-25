import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import policies from '@/components/pages/policies'
import policy from '@/components/pages/policy'
import activities from '@/components/pages/activities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },{
      path: '/policies',
      name: 'policies',
      component: policies
    },{
      path: '/policy/:id',
      name: 'policy',
      component: policy
    },{
      path: '/activities',
      name: 'activities',
      component: activities
    }
  ]
})
