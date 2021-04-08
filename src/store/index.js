import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    initHotelList(state) {
      axios.get('service/hotels.json').then((response) => {
        state.hotelsListFiltered = response.data.hotels;
        state.hotelsList = response.data.hotels;
			});
    },
    setBrandsFilterBy(state, payload) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => { 
        return payload.brands.includes(hotel.brand)
      });
    },
    filterHotels(state) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => { 
        return state.countriesFilterValues.includes(hotel.countryId)
      }).filter(hotel => state.brandsFilterValues.includes(hotel.brand));
    },
    setCountriesFilter(state, payload) {
      state.hotelsListFiltered = state.hotelsList.filter(hotel => { 
        return payload.key.includes(hotel.countryId)
      });
    },
    setBrandsFilterValues(state, payload) {
      state.brandsFilterValues = payload.brands;
    },
    setCountriesFilterValues(state, payload) {
      state.countriesFilterValues = payload.countries.map(country => country.key);
    }
  },
  getters: {
    filteredHotelsList(state) {
      return state.hotelsListFiltered;
    }
  },
  actions: {
    initHotelList(context) {
      context.commit('initHotelList');
    },
    setBrandsFilterBy(context, payload) {
      context.commit('setBrandsFilterBy', payload);
    },
    setCountriesFilter(context, payload) {
      context.commit('setCountriesFilter', payload);
    },
    setBrandsFilterValues(context, payload) {
      context.commit('setBrandsFilterValues', payload);
    },
    setCountriesFilterValues(context, payload) {
      context.commit('setCountriesFilterValues', payload);
    },
    filterHotels(context) {
      context.commit('filterHotels');
    },
    filterCountry(context) {
      context.commit('filterCountry');
    }
  },
  modules: {
  }
})
