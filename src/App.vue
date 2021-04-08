<template>
  <div id="app">
    <main class="main">
      <aside class="filters-aside">
        <filters-panel
          :countries="countries" 
          :brands="brands"
          @filter-by-brands="filterByBrands"
          @filter-by-country="filterByCountry"
        ></filters-panel>
      </aside>
      <hotels-list :hotelsListFiltered="hotelsListFiltered"></hotels-list>
    </main>
    <!-- <main class="main-2">
      <aside class="filters-aside">
        <filters-panel
          :countries="countries" 
          :brands="brands"
          @filter-by-brands="filterByBrands"
          @filter-by-country="filterByCountry"
        ></filters-panel>
        <countries-filter v-if="countries.length > 0" :countries="countries" @filter-by-country="filterByCountry"></countries-filter> 
      </aside>
      <hotels-list :hotels-list-filtered="hotelsListFiltered"></hotels-list>
    </main> -->
  </div>
</template>

<script>
import HotelsList from './components/HotelsList.vue';
import FiltersPanel from './components/FiltersPanel.vue';
import store from './store/index';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HotelsList,
    FiltersPanel
  },
  data() {
    return {
      brands: [],
      countries: [],
      cities: []
    }
  },
  computed: {
    hotelsListFiltered() {
      return this.$store.getters.filteredHotelsList;
    }
  },
  methods: {
    initHotelsList() {
      this.$store.dispatch('initHotelList');	
    },
    initFilters() {
      this.initBrandsFilter();
      this.initCountriesFilter();
    },
    initBrandsFilter() {        
      axios.get('service/brands.json').then((response) => {
        this.brands = response.data.brands;
        this.$store.dispatch('setBrandsFilterValues', { brands: response.data.brands.map(brand => brand.id) });
      });
    },
    initCountriesFilter() {
      this.countries = store.state.hotelsList.map(hotel => hotel.country);
      axios.get('service/countries.json').then((response) => {
        this.countries = response.data.countries;
        this.$store.dispatch('setCountriesFilterValues', { countries: response.data.countries });
      });
    },
    filterByBrands(checkedBrands) {
      const selectedBrands = checkedBrands.length > 0 ? checkedBrands : this.brands.map(brand => brand.id);
      this.$store.dispatch('setBrandsFilterValues', { brands: selectedBrands });
      this.$store.dispatch('filterHotels');
    },
    filterByCountry(selectedCountries) {
      this.$store.dispatch('setCountriesFilterValues', { countries: selectedCountries });
      this.$store.dispatch('filterHotels');
    }
  },
  created() {
    this.initFilters();
    this.initHotelsList();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  display: flex;
}

.main-2 {
  display: flex;
  margin-top: 2em;
}

.filters-aside {
  width: 30%;
}

.content {
  width: 70%;
}
</style>
