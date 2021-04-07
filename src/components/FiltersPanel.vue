<template>
  <section class="filters-panel">
    <brand-filter :brands="brands"></brand-filter>
    <div class="filters-panel__countries">
      <select-filter :data="countries"></select-filter>
    </div>
  </section>
</template>

<script>
  import store from '../store/index';
  import BrandFilter from './BrandFilter';
  import SelectFilter from './SelectFilter';
	import axios from 'axios';

  export default {
    name: 'FiltersPanel',
    components: {
      BrandFilter,
      SelectFilter
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
