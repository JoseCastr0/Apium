<template>
  <section class="filters-panel">
    <brand-filter :brands="brands" @filter-by-brands="filterByBrands"></brand-filter>
    <div class="filters-panel__countries">
      <countries-filter v-if="countries.length > 0" :countries="countries" @filter-by-country="filterByCountry"></countries-filter>
    </div>
  </section>
</template>

<script>
  import BrandFilter from './BrandFilter';
  import CountriesFilter from './CountriesFilter';

  export default {
    name: 'FiltersPanel',
    components: {
      BrandFilter,
      CountriesFilter
    },
    props: {
      countries: Array,
      brands: Array
    },
    methods: {
      filterByBrands(checkedBrands) {
        this.$emit('filter-by-brands', checkedBrands);
      },
      filterByCountry(selectedCountries) {
        this.$emit('filter-by-country', selectedCountries);
      }
    }
  }
</script>

<style scoped lang="scss">
  .filters-panel {
    background-color: #6666DE;
    padding-bottom: 1em;
  }
</style>
