<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card :body-style="{padding: '20px 0 0 0'}" class="signin-card">
          <div class="h3 text-center mb3 mb-xs-1">Вход</div>
          <el-form class="signin-form" :model="signin" ref="signin">
            <el-form-item>
              <el-input placeholder="Email" v-model="signin.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Пароль" v-model="signin.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="signin-btn" type="primary" @click="">Войти</el-button>
            </el-form-item>
          </el-form>
          <div class="text-center p2 pb-xs-2">или войти с помощью</div>
          <el-row class="divider-top">
            <el-col :span="8" class="divider-right">
              <div class="social-content">
                <img :src="require('../assets/img/social/vk.svg')" alt="vk"/>
                <span class="secondary-text px1">Вконтакте</span>
              </div>
            </el-col>
            <el-col :span="8" class="divider-right">
              <div class="social-content">
                <img :src="require('../assets/img/social/fb.svg')" alt="fb"/>
                <span class="secondary-text px1">Facebook</span>
              </div>
            </el-col>
            <el-col :span="8" >
              <div class="social-content">
                <img :src="require('../assets/img/social/google.svg')" alt="google"/>
                <span class="secondary-text px1">Google</span>
              </div>
            </el-col>
          </el-row>
          
        </el-card>
        <el-row class="mt4">
            <div class="line-height-21 text-center pb1">
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
    signin: {
      password: '',
      email: ''
    }
  })
}
</script>

<style>
.signin-card {
  max-width: 570px;
  padding: 0;
  position: relative;
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
}
</style>
