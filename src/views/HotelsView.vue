<template>
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
</template>

<script>
import HotelsList from '../components/HotelsList.vue';
import FiltersPanel from '../components/FiltersPanel.vue';
import store from '../store/index';
import axios from 'axios';

export default {
  name: 'HotelsView',
  components: {
    HotelsList,
    FiltersPanel
  },
  data() {
    return {
      brands: [],
      countries: [],
      cities: [],
      // countriesFilterValues: []
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
        // this.countriesFilterValues = this.countries.map(country => country.key);
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
