<template>
  <section class="hotels-list">
    <ul>
      <li v-for="hotel in hotelsListFiltered" :key="hotel.index">
        <hotel :hotel="hotel"></hotel>
      </li>
    </ul>
  </section>
</template>

<script>
  import Hotel from './Hotel';

  export default {
    name: 'HotelsList',
    components: {
      Hotel
    },
    props: {
      hotelsListFiltered: Array
    }
  }
</script>

<style scoped lang="scss">
  .hotels-list {
    background-color: #6666DE;
    margin-left: 1em;
    padding-bottom: 1em;
  }
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
