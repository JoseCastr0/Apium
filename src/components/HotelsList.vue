<template>
  <section class="hello">
    <ul>
      <li v-for="hotel in hotelsListFiltered" :key="hotel.index">
        <hotel :hotel="hotel"></hotel>
      </li>
    </ul>
  </section>
</template>

<script>
  import Hotel from './Hotel';
  import axios from 'axios';

  export default {
    name: 'HotelsList',
    components: {
      Hotel
    },
    computed: {
      hotelsListFiltered() {
        return this.$store.getters.filteredHotelsList;
      }
    },
    created() {
      axios.get('service/hotels.json').then((response) => {
        this.$store.dispatch('initHotelList', { hotels: response.data.hotels });	
			});
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
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
