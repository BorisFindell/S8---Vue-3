import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    naus:[],
  },

  mutations: {
    llenarNaus(state, nausAccion) {
      state.naus = nausAccion
      
      nausAccion.results.forEach(nau => {
        let regex = new RegExp(/\d+/g)
        nau.id = parseInt(nau.url.match(regex)[0])
      })
    },
      
  },
  
  actions: {
    obtenirNaus: async function ({ commit }) {
      const data = await fetch('https://swapi.dev/api/starships/')
      const naus = await data.json()
      commit ('llenarNaus', naus)
    }
  },
  modules: {
  }
})
