<template>
<el-container>
  <el-header class="header divider-bottom" height="70px">
    <Header></Header>
  </el-header>
  <el-main>
    <el-row :gutter="20">
  <el-col :span="6">
    <router-link to="/form/sign-in">sign-in</router-link>
  </el-col>
  <el-col :span="6">
    <router-link to="/form/sign-up">sign-up</router-link>
  </el-col>
  <el-col :span="6">
    <router-link to="/form/recovery">recovery</router-link>
  </el-col>
  <el-col :span="6">
    <router-link to="/product/vebinar">vebinar</router-link>
  </el-col>
</el-row>
  </el-main>
  <el-footer class="footer" height="auto">
    <div class="secondary-text footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="secondary-text" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
</el-container>

</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: 'home',
  components: {
    Header
  },
  // mounted() {
  //   this.$router.push('/')
  // }
}
</script>