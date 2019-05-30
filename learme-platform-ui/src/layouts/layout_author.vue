<template>
  <el-container style="flex-direction: column;">
    <Header></Header>
    <router-view></router-view>
</el-container>
</template>

<script>
import Header from '../components/HeaderAuthor'
  export default {
    components: { Header }
  }
</script>

<style>
  @media (min-width: 320px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-left: 135px;
      padding-right: 135px;
    }
  }
</style>
