<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card class="recovery-card">
          <h1 class="h1">Восстановление пароля</h1>
          <div class="pre-message text-center">
            Введите свой E-mail, и мы отправим вам ссылку для сброса вашего пароля:
          </div>
          <el-form class="recovery-form" :model="recovery" ref="recovery">
            <el-form-item>
              <el-input placeholder="Ваша электронная почта" type="email" v-model="recovery.email"></el-input>
            </el-form-item>
            <el-form-item >
              <el-row class="line-height-21">
                <el-col :xs="24" :sm="12">
                  <el-button class="w-xs-100" type="primary" @click="submit">Восстановить пароль</el-button>
                </el-col>
                <el-col :xs="24" :sm="12" class="text-link">
                  <el-button type="text">Регистрация</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-card>
        </div>
      </el-row>
</template>

<script>
export default {
  data: () => ({
    recovery: {
      email: ''
    },
  }),
  methods: {
    submit() {

    }
  }
}
</script>

<style>
.recovery-card {
  max-width: 570px;
  padding: 0;
  position: relative;
}
.recovery-card > .el-card__body {
  padding: 20px 0 0 0 !important;
}
.recovery-btn {
  width: 177px;
  height: 50px;
  font-size: 18px;
  line-height: 18px;
}
.recovery-form {
  padding: 0 40px;
  text-align: center;
}
.h1 {
  padding: 20px 40px 0 40px;
  margin-bottom: 16px;
}
.pre-message {
  padding: 0 100px 32px 100px;
}
  .text-link {
    text-align: right;
  }
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .recovery-form {
    padding: 0 23px;
  }
  .recovery-btn {
    width: 136px;
    height: 39px;
    font-size: 16px;
    line-height: 16px;
  }
  .recovery-card > .el-card__body {
    padding: 0 !important;
  }
  .pre-message {
    padding: 0 24px 32px 24px;
    font-size: 12px;
    line-height: 18px;
  }
  .text-link {
    text-align: center;
  }
}
</style>
