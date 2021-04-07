import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      hotelsList: [],
      hotelsListFiltered: []
    }
  },
  mutations: {
    initHotelList(state, payload) {
      state.hotelsListFiltered = payload.hotels;
      state.hotelsList = payload.hotels;
    },
    setBrandsFilterBy(state, payload) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => { 
        return payload.brands.includes(hotel.brand)
      });
    }
  },
  getters: {
    filteredHotelsList(state) {
      return state.hotelsListFiltered;
    }
  },
  actions: {
    initHotelList(context, payload) {
      context.commit('initHotelList', payload);
    },
    setBrandsFilterBy(context, payload) {
      context.commit('setBrandsFilterBy', payload);
    }
  },
  modules: {
  }
})
