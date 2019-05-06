import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Flexbox from '@/views/Flexbox'
import Grid from '@/views/Grid'
import GridChallenge from '@/challenges/grid/challenge'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/grid-challenge',
      name: 'GridChallenge',
      component: GridChallenge
    }
  ]
})
