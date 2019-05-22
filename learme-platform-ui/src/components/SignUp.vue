<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card class="signup-card">
          <h1 class="h1">Регистрация</h1>
          <div class="pre-message text-center">
            Чтобы начать использовать Learme пожалуйста зарегистрируйтесь или <a class="link" href="">авторизуйтесь</a> если у вас уже есть аккаунт в нашей системе:
          </div>
          <el-form class="signup-form" :model="signup" ref="signup">
            <el-form-item>
              <el-input placeholder="Имя" v-model="signup.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Электронная почта" type="email" v-model="signup.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Номер телефона, 10 цифр" v-model="signup.phone" class="input-with-select">
                <el-select size="mini" v-model="signup.select" slot="prepend" placeholder="+375">
                  <el-option label="+375" value="1"></el-option>
                  <el-option label="+7" value="2"></el-option>
                  <el-option label="+123" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-row style="display: flex;" class="text-left pb-2">
              <el-checkbox style="margin-right: 0; line-height: 21px;"></el-checkbox><div style="font-size: 14px; line-height: 21px; padding-left: 8px;">Принимаю пользовательское соглашение</div>
            </el-row>
            <el-form-item >
              <el-row class="line-height-21">
                <el-col :xs="24" :sm="12" >
                  <el-button class="w-xs-100" type="primary" @click="submit">Зарегистрироваться</el-button>
                </el-col>
                <el-col class="hidden-xs-only" :sm="12" >
                  <div>Пароль придёт на электронную почту сразу после регистрации.</div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
          <div class="text-center pb-2 p-md-2">Зарегистрироваться с помощью</div>
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
        </div>
      </el-row>
</template>

<script>
export default {
  data: () => ({
    vkIcon: require('../assets/img/social/vk.svg'),
    fbIcon: require('../assets/img/social/fb.svg'),
    gooIcon: require('../assets/img/social/google.svg'),
    signup: {
      name: '',
      email: '',
      phone: '',
      select: ''
    },
  }),
  methods: {
    submit() {

    }
  }
}
</script>

<style>
.signup-card {
  max-width: 570px;
  padding: 0;
  position: relative;
}
.signup-card > .el-card__body {
  padding: 20px 0 0 0 !important;
}
.signup-btn {
  width: 177px;
  height: 50px;
  font-size: 18px;
  line-height: 18px;
}
.signup-form {
  padding: 0 40px;
  text-align: center;
}
.h1 {
  padding: 20px 40px 0 40px;
  margin-bottom: 16px;
}
.social-content {
  padding: 20px 40px; 
  display: flex; 
  align-items: center;
}
.pre-message {
  padding: 0 40px 32px 16px;
}
.el-select .el-input {
    width: 88px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .social-content {
    flex-direction: column;
    padding: 5px 20px;
  }
  .signup-form {
    padding: 0 23px;
  }
  .signup-btn {
    width: 136px;
    height: 39px;
    font-size: 16px;
    line-height: 16px;
  }
  .signup-card > .el-card__body {
    padding: 0 !important;
  }
  .pre-message {
    padding: 0 24px 32px 24px;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
