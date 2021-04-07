<template>
  <div class="brand-filter">
    <h4 class="brand-filter__title">Filter by brand</h4>
    <section class="brand-filter__wrapper">
      <div v-for="brand in brands" :key="brand.id">
          <input type="checkbox" :id="brand.id" :value="brand.id" v-model="checkedBrands" @change="filterByBrands()"> <label :for="brand.id">{{ brand.name }}</label>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'BrandFilter',
    props: {
			brands: Array
		},
		data() {
			return {
				checkedBrands: []
			}
		},
		methods: {
      filterByBrands() {
				const selectedBrands = this.checkedBrands.length > 0 ? this.checkedBrands : this.brands.map(brand => brand.id);
        console.log('brandFilter', selectedBrands);
				this.$store.dispatch('setBrandsFilterValues', { brands: selectedBrands });
				this.$store.dispatch('filterHotels');
      }
    }
  }
</script>

<style scoped lang="scss">
  .brand-filter {
    align-items: center;
    border: 1px #000000 solid;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-bottom: 1em;
    width: 100%;
    
    &__wrapper {

    }
  }
</style>
