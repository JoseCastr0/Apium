<template>
  <div class="hotel">
    <h4 class="hotel__name">{{ hotel.name }}</h4>    
  </div>
</template>

<script>
  export default {
    name: 'Hotel',
    props: {
      hotel: Object
    }
  }
</script>

<style scoped lang="scss">
  .hotel {
    align-items: center;
    border: 1px #000000 solid;
    display: flex;
    height: 150px;
    justify-content: center;
    width: 150px;
    
    &__name {
      color: #000000;
      height: fit-content;
    }
  }
</style>
