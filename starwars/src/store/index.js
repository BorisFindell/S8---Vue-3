import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    naus:[],
    nextPageUrl:"https://swapi.dev/api/starships",
    modal: null
  },

  mutations: {
    llenarNaus(state, nausAccion) {
      state.naus.push(...(nausAccion.results))
      
      nausAccion.results.forEach(nau => {
        let regex = new RegExp(/\d+/g)
        nau.id = parseInt(nau.url.match(regex)[0])
      })
    },

    updatePage(state, newUrl) {
      state.nextPageUrl = newUrl
    },
    resetStarshipList(state){
      state.naus = []
      state.nextPageUrl= "https://swapi.dev/api/starships"
    },

    closeModal(state){
      state.modal = null
    },
    openModal(state, modal){
      state.modal = modal
    }
  },
  
  actions: {
    obtenirNaus: async function ({ commit, state }) {
      const data = await fetch(state.nextPageUrl)
      const naus = await data.json()
      commit ('llenarNaus', naus)
      commit ('updatePage', naus.next)
    }
  },
  modules: {
  }
})
