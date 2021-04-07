<template>
  <section class="filters-panel">
    <brand-filter :brands="brands"></brand-filter>
    <div class="filters-panel__countries">
      <countries-filter v-if="countries.length > 0" :countries="countries"></countries-filter>
    </div>
  </section>
</template>

<script>
  import store from '../store/index';
  import BrandFilter from './BrandFilter';
  import CountriesFilter from './CountriesFilter';
	import axios from 'axios';

  export default {
    name: 'FiltersPanel',
    components: {
      BrandFilter,
      CountriesFilter
    },
    props: {
      msg: String
    },
    data() {
      return {
        brands: [],
        countries: [],
        cities: []
      }
    },
    methods: {
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
      }
    },
    mounted() {
      this.initFilters();
    }
  }
</script>

<style scoped lang="scss">
  .filters-panel {
    background-color: #6666DE;
    padding-bottom: 1em;
  }
</style>
