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
    setBrandsFilterBy(state, brands) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => brands.includes(hotel.brand));
    },
    setFilteredHotelsList(state, hotels) {
      state.hotelsListFiltered = hotels;
    }
  },
  getters: {
    filteredHotelsList(state) {
      return state.hotelsListFiltered;
    }
  },
  actions: {
  },
  modules: {
  }
})
