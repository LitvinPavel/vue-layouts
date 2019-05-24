<template>
  <el-container>
  <el-header class="header divider-bottom" height="70px">
    <Header></Header>
  </el-header>
    <router-view></router-view>
</el-container>
</template>

<script>
import Header from '../components/Header'
  export default {
    components: { Header }
  }
</script>

<style>
  @media (min-width: 320px) {
    .container {
      padding: 32px 16px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding: 48px 24px;
    }
  }
  @media (min-width: 1440px) {
    .container {
      padding: 80px 135px;
    }
  }
</style>
