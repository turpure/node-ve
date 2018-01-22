import Vue from 'vue'
import Router from 'vue-router'
import MyHello from '@/components/MyHello'
import HelloWorld from '@/components/HelloWorld'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // hashbang: false,
  routes: [
    {
      path: '/hello',
      name: 'MyHello',
      component: MyHello
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movies',
      name: 'Movies',
      component:Movies
    },
  ]
})
