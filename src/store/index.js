import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      hotelsList: [],
      hotelsListFiltered: [],
      brandsFilterValues: [],
      countriesFilterValues: []
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
    },
    setCountriesFilter(state, payload) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => { 
        return payload.key.includes(hotel.countryId)
      });
    },
    setBrandsFilterValues(state, payload) {
      state.brandsFilterValues = payload.value;
    },
    setCountriesFilterValues(state, payload) {
      state.countriesFilterValues = payload.value;
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
    },
    setCountriesFilter(context, payload) {
      context.commit('setCountriesFilter', payload);
    },
    setBrandsFilterValues(context, payload) {
      context.commit('setBrandsFilterValues', payload.value);
    },
    setCountriesFilterValues(context, payload) {
      context.commit('setCountriesFilterValues', payload.value);
    }
  },
  modules: {
  }
})
