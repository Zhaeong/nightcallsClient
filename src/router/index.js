import Vue from 'vue'
import Router from 'vue-router'

import Intro from '@/components/intro/Intro'
import Main from '@/components/game/Main'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
