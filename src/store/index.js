import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flavor :'',
    resultSearch: []
  },
  mutations: {
    change(state, flavor){
      state.flavor = flavor
    },
    setResultSearch(state, payload){
      state.resultSearch = payload
    }
  },
  actions: { 
    searchByName({commit, dispatch}, cocktailName){
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
        .then(({data}) => {
          commit('setResultSearch', data)
        })
      }
  },
  modules: {
  }
})
