<template>
<div>
  <select v-model="selectedCountry" @change="setCountriesFilterBy">
    <option v-for="country in countries" :value="country.key" :key="country.key">
      {{ country.value }}
    </option>
  </select>
      <span>Selected: {{selectedCountry}}</span>
  
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
      setCountriesFilterBy() {
				// const selectedBrands = this.checkedBrands.length > 0 ? this.checkedBrands : this.brands.map(brand => brand.id);
        console.log('selectedCountry', this.selectedCountry);
        console.log('countries', this.countries);
				this.$store.dispatch('setCountriesFilter', { key: this.selectedCountry });					
      }
    },
    created() {
      console.log('mounted', this.countries);
      // this.countries.unshift({ key: '0', value: ''});
      // this.selectedCountry = this.countries[0];
      // this.selected = 'sp';
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
