import Vue from 'vue'
import Router from 'vue-router'
import StoriesFamous from '@/components/StoriesFamous'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import StoriesAll from '@/components/StoriesAll'
import StoriesEdit from '@/components/StoriesEdit'
import StoriesPage from '@/components/StoriesPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesPage,
      children: [
        {
          path: '/',
          name: 'stories.all',
          component: StoriesAll
        },
        {
          path: 'famous',
          name: 'stories.famous',
          alias: '/famous',
          component: StoriesFamous
        },
        {
          path: ':id/edit',
          props: (route) => ({ id: Number(route.params.id) }),
          name: 'stories.edit',
          component: StoriesEdit
        }
      ]
    }
  ]
})
