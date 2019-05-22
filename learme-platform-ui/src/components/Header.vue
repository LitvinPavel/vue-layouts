<template>
    <img class="header__logo" :src="logo" alt="logo" style="vertical-align: middle;">
</template>

<script>
  export default {
    data: () => ({
      logo: require('../assets/logo.svg')
    })
  }
</script>

<style>
.header__logo {
    padding: 23px 0;
  }
</style>
