import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allData: [],
  },
  getters: {
    getAllData: (state) => state.allData,
  },
  mutations: {
    setAllData: (state, payload) => state.allData = payload,
  },
  actions: {
    loadList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            [
              { id: 1, date: '1.1.2022', category: 'one', value: 1 },
              { id: 2, date: '2.2.2022', category: 'two', value: 2 },
              { id: 3, date: '3.3.2022', category: 'three', value: 3 },
              { id: 4, date: '4.4.2022', category: 'four', value: 4 },
              { id: 5, date: '5.5.2022', category: 'five', value: 5 },
              { id: 6, date: '6.6.2022', category: 'six', value: 6 },
              { id: 7, date: '7.7.2022', category: 'seven', value: 7 },
              { id: 8, date: '8.8.2022', category: 'eight', value: 8 },
              { id: 9, date: '9.9.2022', category: 'nine', value: 9 },
              { id: 10, date: '10.10.2022', category: 'ten', value: 10 },
              { id: 11, date: '1.1.2022', category: 'one', value: 11 },
              { id: 12, date: '2.2.2022', category: 'two', value: 12 },
              { id: 13, date: '3.3.2022', category: 'three', value: 13 },
              { id: 14, date: '4.4.2022', category: 'four', value: 14 },
              { id: 15, date: '5.5.2022', category: 'five', value: 15 },
              { id: 16, date: '6.6.2022', category: 'six', value: 16 },
              { id: 17, date: '7.7.2022', category: 'seven', value: 17 },
              { id: 18, date: '8.8.2022', category: 'eight', value: 18 },
              { id: 19, date: '9.9.2022', category: 'nine', value: 19 },
              { id: 20, date: '10.10.2022', category: 'ten', value: 20 },
            ]
          )
        }, 1000)
      })
        .then((list) => commit('setAllData', list))
    },
  },
  modules: {
  }
})
