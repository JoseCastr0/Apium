<template>
  <select class="countries-filter" v-model="selectedCountry" @change="filterByCountry">
    <option v-for="country in countries" :value="country" :key="country.key">
      {{ country.value }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'CountriesFilter',
    props: {
			countries: Array		
		},
		data() {
			return {
				selectedCountry: null,
        selected: 'sp'
			}
		},
		methods: {
      filterByCountry() {
        const selectedCountries = this.selectedCountry.key === '0' ? this.countries : [this.selectedCountry];
				this.$store.dispatch('setCountriesFilterValues', { countries: selectedCountries });
				this.$store.dispatch('filterHotels');
      }
    },
    created() {
      this.countries.unshift({ key: '0', value: ''});
    }
  }
</script>

<style scoped lang="scss">
  .countries-filter {
    background-color: #ADADE3;
    border: 1px #000000 solid;
    flex-direction: column;
    height: 100%;
    margin-top: 1em;
    padding-bottom: 1em;
    width: 50%;    
    
  }
</style>
