<template>
  <el-container>
  <el-header class="header divider-bottom" height="70px" style="z-index:1;">
    <Header></Header>
  </el-header>
    <router-view></router-view>
</el-container>
</template>

<script>
import Header from '../components/HeaderTChat'
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
