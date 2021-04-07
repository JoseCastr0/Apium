<template>
  <section class="filters-panel">
    <brand-filter :brands="brands"></brand-filter>
  </section>
</template>

<script>
  // import hotels from '../hotels';
  // import brands from '../../service/brands';
  import store from '../store/index';
  import BrandFilter from './BrandFilter';
	import axios from 'axios';

  export default {
    name: 'FiltersPanel',
    components: {
      BrandFilter
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
    mounted() {
      this.countries = store.state.hotelsList.map(hotel => hotel.country);
			
			
			axios.get('service/brands.json').then((response) => {
				this.brands = response.data.brands;
			});
      // this.hotelsListFiltered = this.hotelsList.filter(hotel => hotel.country.toLowerCase() === 'spain');
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
