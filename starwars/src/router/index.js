import Vue from 'vue'
import VueRouter from 'vue-router'
import Benving from '../views/Benving.vue'
import StarshipsV from '../views/StarshipsV.vue'
import StarshipItem from '../components/StarshipItem.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Benving',
    component: Benving
  },

  {
    path: '/starshipsV',
    name: 'StarshipsV',
    component: StarshipsV
  },

  {
    path: '/starshipItem',
    name: 'StarshipItem',
    component: StarshipItem
  }
]

const router = new VueRouter({
  routes
})

export default router
