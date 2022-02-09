import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    naus:[]
  },

  mutations: {
    llenarNaus(state, nausAccion) {
      state.naus = nausAccion
    }
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
