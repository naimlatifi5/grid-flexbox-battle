import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Flexbox from '@/views/Flexbox'
import Grid from '@/views/Grid'
import CssLayouts from '@/views/CssLayouts'
import GridChallenge from '@/challenges/grid/main/challenge'
import Challenge1 from '@/challenges/grid/challenge1/challenge'
import Challenge2 from '@/challenges/grid/challenge2/challenge'

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
      path: '/csslayouts',
      name: 'CssLayouts',
      component: CssLayouts
    },
    {
      path: '/grid-challenge',
      name: 'GridChallenge',
      component: GridChallenge
    },
    {
      path: '/challenge1',
      name: 'challenge1',
      component: Challenge1
    },
    {
      path: '/challenge2',
      name: 'challenge2',
      component: Challenge2
    }
  ]
})
