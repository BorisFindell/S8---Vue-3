import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeV from '../views/HomeV.vue'
import StarshipsV from '../views/StarshipsV.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeV',
    component: HomeV
  },

  {
    path: '/StarshipsV',
    name: 'StarshipsV',
    component: StarshipsV
  },
]

const router = new VueRouter({
  routes
})

export default router
