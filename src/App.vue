<template>
  <div id="app">
    <main class="main">
      <aside class="filters-aside">
        <filters-panel></filters-panel>
      </aside>
      <hotels-list></hotels-list>
    </main>
  </div>
</template>

<script>
import HotelsList from './components/HotelsList.vue';
import FiltersPanel from './components/FiltersPanel.vue';

export default {
  name: 'App',
  components: {
    HotelsList,
    FiltersPanel
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

.main {
  display: flex;
}

.filters-aside {
  width: 30%;
}

.content {
  width: 70%;
}
</style>
