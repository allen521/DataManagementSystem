import Vue from 'vue'
import Router from 'vue-router'
import filterTree from '@/components/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      name: 'filterTree',
      component: filterTree,
    }
  ]
})
