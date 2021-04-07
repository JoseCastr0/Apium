<template>
  <select v-model="selectedValue">
    <option v-for="option in data" v-bind:value="option.value" :key="option.key">
      {{ option }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'SelectFilter',
    props: {
			data: Array		
		},
		data() {
			return {
				selectedValue: this.data[0]
			}
		},
		methods: {
      
    },
    mounted() {
      console.log('mounted', this.data);
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
