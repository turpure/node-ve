import Vue from 'vue'
import Router from 'vue-router'
import MyHello from '@/components/MyHello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHello',
      component: MyHello
    }
  ]
})
