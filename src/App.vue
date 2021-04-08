<template>
  <div id="app">
    <hotels-view></hotels-view>
    <!-- <hotels-view></hotels-view> -->
  </div>
</template>

<script>
import HotelsView from './views/HotelsView.vue';

export default {
  name: 'App',
  components: {
    HotelsView
  }  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
