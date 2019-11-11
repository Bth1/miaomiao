import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import movieRouter from '@/views/Movie'
import cinemaRouter from '@/views/Cinema'
import mineRouter from '@/views/Mine'

//二级路由
import cityRouter from '@/components/City'
import comingSoonRouter from '@/components/ComingSoon'
import searchRouter from '@/components/Search'
import nowPlayingRouter from '@/components/NowPlaying'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/movie', name: 'movie', component: movieRouter, children: [
      { path: 'city', name: 'city', component: cityRouter },
      { path: 'nowPlaying', name: 'nowPlaying', component: nowPlayingRouter },
      { path: 'comingSoon', name: 'comingSoon', component: comingSoonRouter },
      { path: 'search', name: 'search', component: searchRouter },
      { path: '/movie', redirect: '/movie/nowPlaying' }
    ]}, 
    { path: '/cinema', name: 'cinema', component: cinemaRouter },
    { path: '/mine', name: 'mine', component: mineRouter },
    { path: '*', redirect: '/movie' }
  ]
})