<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card class="signin-card">
          <h1 class="h1">Вход</h1>
          <el-form class="signin-form" :model="signin" ref="signin">
            <el-form-item>
              <el-input placeholder="Email" v-model="signin.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Пароль" v-model="signin.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="signin-btn" type="primary" @click="submit">Войти</el-button>
            </el-form-item>
          </el-form>
          <div class="text-center p-md-2">или войти с помощью</div>
          <el-row class="divider-top">
            <el-col :span="8" class="divider-right">
              <div class="social-content">
                <img :src="vkIcon" alt="vk"/>
                <span class="secondary-text px-1">Вконтакте</span>
              </div>
            </el-col>
            <el-col :span="8" class="divider-right">
              <div class="social-content">
                <img :src="fbIcon" alt="fb"/>
                <span class="secondary-text px-1">Facebook</span>
              </div>
            </el-col>
            <el-col :span="8" >
              <div class="social-content">
                <img :src="gooIcon" alt="google"/>
                <span class="secondary-text px-1">Google</span>
              </div>
            </el-col>
          </el-row>
          
        </el-card>
        <el-row class="mt-4">
            <div class="line-height-21 text-center pb-1">
              <span>Нет учетной записи в Learme? </span>
              <a class="link" href="">Зарегистрироваться</a>
            </div>
            <div class="line-height-21 text-center">
              <span>Не можете войти в аккаунт? </span>
              <a class="link" href="">Восстановить пароль</a>
            </div>
          </el-row>
        </div>
      </el-row>
</template>

<script>
export default {
  data: () => ({
    vkIcon: require('../assets/img/social/vk.svg'),
    fbIcon: require('../assets/img/social/fb.svg'),
    gooIcon: require('../assets/img/social/google.svg'),
    signin: {
      password: '',
      email: ''
    }
  }),
  methods: {
    submit() {

    }
  }
}
</script>

<style>
.signin-card {
  max-width: 570px;
  padding: 0;
  position: relative;
}
.signin-card > .el-card__body {
  padding: 20px 0 0 0 !important;
}
.signin-btn {
  width: 177px;
  height: 50px;
  font-size: 18px;
  line-height: 18px;
}
.signin-form {
  padding: 0 40px;
  text-align: center;
}
.h1 {
  padding: 20px 40px 12px 40px;
}
.social-content {
  padding: 20px 40px; 
  display: flex; 
  align-items: center;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .social-content {
    flex-direction: column;
    padding: 5px 20px;
  }
  .signin-form {
    padding: 0 23px;
  }
  .signin-btn {
    width: 136px;
    height: 39px;
    font-size: 16px;
    line-height: 16px;
  }
  .signin-card > .el-card__body {
    padding: 0 !important;
  }
}
</style>
