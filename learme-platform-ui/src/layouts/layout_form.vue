<template>
  <el-container>
  <el-header class="header divider-bottom" height="70px">
    <Header></Header>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
  <el-footer class="footer" height="auto">
    <div class="secondary-text footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="secondary-text" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
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
      padding: 32px 0;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding: 48px 24px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding: 80px 135px;
    }
  }
</style>
