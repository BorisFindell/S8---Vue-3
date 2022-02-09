import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeV from '../views/HomeV.vue'
import StarshipsV from '../views/StarshipsV.vue'
import StarshipItem from '../components/StarshipItem.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeV',
    component: HomeV
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
