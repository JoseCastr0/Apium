<template>
<div>
  <select v-model="selectedCountry" @change="filterByCountry">
    <option v-for="country in countries" :value="country" :key="country.key">
      {{ country.value }}
    </option>
  </select>  
</div>
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
				this.$store.dispatch('setCountriesFilterValues', { countries: [this.selectedCountry] });
				this.$store.dispatch('filterHotels');
      }
    }    
  }
</script>

<style scoped lang="scss">
  .select-filter {
    align-items: center;
    border: 1px #000000 solid;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-bottom: 1em;
    width: 100%;
    
    
  }
</style>
