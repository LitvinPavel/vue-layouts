<template>
    <el-row class="header-wrapper" type="flex" justify="space-between">
      <img  :src="logo" alt="logo">
      <el-button v-if="$route.path !== '/'" type="primary" icon="el-icon-arrow-left" @click="$router.go(-1)"></el-button>
    </el-row>
</template>

<script>
  export default {
    data: () => ({
      logo: require('../assets/logo.svg')
    })
  }
</script>

<style>
.header-wrapper {
    padding: 23px 0;
  }
</style>
