import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Music from '../views/Music.vue'
import Movie from '../views/Movie.vue'
import Book from '../views/Book.vue'
import Photoes from '../views/Photoes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/movie',
    component: Home
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/photoes',
    name: 'photoes',
    component: Photoes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
