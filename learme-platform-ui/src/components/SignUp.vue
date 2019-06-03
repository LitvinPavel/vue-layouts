<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card :body-style="{padding: '20px 0 0 0'}" class="signup-card">
          <div class="h3 text-center mb3 mb-xs-1">Регистрация</div>
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
              <el-input :placeholder="phonePlaceholder" v-model="signup.phone" class="input-with-select">
                <el-select size="mini" v-model="signup.select" slot="prepend" placeholder="+375">
                  <el-option label="+375" value="1"></el-option>
                  <el-option label="+7" value="2"></el-option>
                  <el-option label="+123" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-row type="flex" class="text-left pb2">
              <el-checkbox class="mr0"></el-checkbox>
              <div class="pl1 small-text text-black">Принимаю пользовательское соглашение</div>
            </el-row>
            <el-form-item >
              <el-row class="line-height-21">
                <el-col :xs="24" :sm="12" >
                  <el-button class="w-xs-100" type="primary" @click="">Зарегистрироваться</el-button>
                </el-col>
                <el-col class="hidden-xs-only" :sm="12" >
                  <div>Пароль придёт на электронную почту сразу после регистрации.</div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
          <div class="text-center pb2 p-md-2">Зарегистрироваться с помощью</div>
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
        </div>
      </el-row>
</template>

<script>
export default {
  data: () => ({
    signup: {
      name: '',
      email: '',
      phone: '',
      select: ''
    },
    phonePlaceholder: 'Номер телефона, 10 цифр'
  }),
  mounted() {
      if (document.body.offsetWidth < 768) {
        this.phonePlaceholder = 'телефон'
      } else {
        this.phonePlaceholder = 'Номер телефона, 10 цифр'
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
  .pre-message {
    padding: 0 24px 32px 24px;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
