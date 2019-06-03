<template>
<el-container>
  <el-header class="header divider-bottom" height="70px">
    <Header></Header>
  </el-header>
  <el-main>
    <el-row :gutter="10">
  <el-col>
    <router-link to="/form/sign-in">
      <el-button size="mini">sign-in</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/form/sign-up">
      <el-button size="mini">sign-up</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/form/sign-up-pay">
      <el-button size="mini">sign up payment</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/form/recovery">
      <el-button size="mini">recovery</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/product/vebinar">
      <el-button size="mini">vebinar</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/product/product-free">
      <el-button size="mini">product free</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/product/product-payment">
      <el-button size="mini">product payment</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/form/success-vebinar">
      <el-button size="mini">success vebinar</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/course/landing">
      <el-button size="mini">Course Landing</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/course/room">
      <el-button size="mini">Webinar Room</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/author/account">
      <el-button size="mini">Account</el-button>
    </router-link>
  </el-col>
  <el-col>
    <router-link to="/author/index-page">
      <el-button size="mini">Index Page</el-button>
    </router-link>
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