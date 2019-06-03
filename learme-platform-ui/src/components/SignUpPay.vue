<template>
  <div>
    <el-row class="main-row">
      <div class="m-auto">
        <el-card class="signup-card" :body-style="{padding: '20px 0 0 0'}">
          <div class="h3 text-center mb3">Оплата курса</div>
          <el-row class="text-center pt3 pb1 mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1 align-center" type="flex">
            <el-col :xs="5" :sm="3" :md="4" class="text-left">
              <img :src="require('../assets/img/english-course.svg')" alt="" class="en-course-img">
            </el-col>
            <el-col :xs="12" :sm="15" :md="14" class="text-left small-text">
              <div>«Teaching English to Young Learners as a Foreign Language with Letterland»</div>
            </el-col>
            <el-col :xs="7" :sm="6" :md="6" class=" text-right small-text">
              <div class="tiny-text">Стоимость</div>
              <div class="h4 text-black">19 999 ₽</div>
            </el-col>
          </el-row>
          <el-row class="mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1">
            <div class="el-divider el-divider--horizontal mt0"></div>
          </el-row>
          <div class="small-text text-center mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1">Чтобы перейти к оплате, пожалуйста заполните форму ниже или <a class="link" href="">авторизуйтесь</a> если у вас уже есть аккаунт в нашей системе.
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
            <el-row type="flex" class="text-left pb2">
              <el-checkbox class="mr0"></el-checkbox>
              <div class="pl1 small-text text-black">Принимаю пользовательское соглашение</div>
            </el-row>
            <el-form-item>
              <el-row class="line-height-21">
                <el-col :span="24">
                  <el-button class="w-xs-100" type="primary" @click="submit">Перейти к оплате</el-button>
                </el-col>
                <el-col :span="24">
                  <div class="tiny-text pt1">Данные для доступа к курсу придут на вашу электронную почту сразу посе оплаты.</div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </el-row>
    <Pay></Pay>
  </div>
</template>

<script>
import Pay from './Pay'
  export default {
    components: { Pay },
    data: () => ({
      signup: {
        name: '',
        email: '',
        phone: '',
        select: ''
      }
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
  @media (max-width: 767px) {
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
    .en-course-img {
      width: 32px;
    }
  }
</style>
