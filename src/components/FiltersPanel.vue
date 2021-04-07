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
        });
      },
      initCountriesFilter() {
        this.countries = store.state.hotelsList.map(hotel => hotel.country);
        axios.get('service/countries.json').then((response) => {
          this.countries = response.data.countries;
          console.log('countries', this.countries)
        });
      }
    },
    mounted() {
      this.initFilters();
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
