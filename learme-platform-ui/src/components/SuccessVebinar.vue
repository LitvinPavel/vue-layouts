<template>
  <el-row class="main-row">
    <div class="m-auto">
      <el-card class="recovery-card" :body-style="{padding: '0'}">
        <el-button size="mini" plain :class="[isMusic ? 'text-success' : 'text-error', 'hidden-xs-only', 'badge-mobile']" @click="isMusic = !isMusic">
          <div class="d-flex align-center">
            <img :src="isMusic ? require('../assets/img/music-value-on.svg') : require('../assets/img/music-value-off.svg')" alt="">
            <span>{{isMusic ? 'Включить музыку' : 'Выключить музыку'}}</span>
          </div>
        </el-button>
        <img :src="require('../assets/img/vebinar/banner.svg')" width="100%" class="pt0">
        <div class="h3 text-center pt-lg-4 pt-md-4 pb-lg-1 pb-md-1 px-lg-4 px-md-4 p-xs-1">Название вебинара в несколько сторк</div>
        <div class="text-center table-text px5 px-xs-3">
          Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк
        </div>
        <div class="d-flex align-center justify-center text-link body-text pt4 pt-xs-3">
          <img :src="require('../assets/img/time-icon.svg')" alt="">
          <span>26 мая 2018 в 16:00 по МСК</span>
        </div>
        <div class="text-center table-text">мероприятие еще не началось</div>
        <el-row class="py3 px4">
          <el-col :md="12" :xs="24" class="text-center px2 pb-xs-1">
            <el-button style="width: 100%;" plain size="mini">
              <div class="d-flex align-center justify-center">
                <img :src="require('../assets/img/icon/calendar.svg')" alt="">
                <span class="pl1">Добавить в календарь</span>
              </div>
            </el-button>
          </el-col>
          <el-col :md="12" :xs="24" class="text-center px2 pb-xs-3">
            <el-button style="width: 100%;" plain size="mini">
              <div class="d-flex align-center justify-center">
                <img :src="require('../assets/img/icon/event-messanger.svg')" alt="">
                <span class="pl1">Напомнить в мессенджере</span>
              </div>
            </el-button>
          </el-col>
          <el-col :md="12" :xs="24" class="text-center px2 hidden-sm-and-up">
            <el-button size="mini" plain :class="[isMusic ? 'text-success' : 'text-error']" @click="isMusic = !isMusic">
              <div class="d-flex align-center">
                <img :src="isMusic ? require('../assets/img/music-value-on.svg') : require('../assets/img/music-value-off.svg')" alt="">
                <span>{{isMusic ? 'Включить музыку' : 'Выключить музыку'}}</span>
              </div>
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-row>
</template>

<script>
  export default {
    data: () => ({
      isMusic: true
    }),
    mounted() {
      this.$message({
        message: 'Вы успешно зарегистрировались на вебинар.',
        center: true,
        iconClass: 'el-icon-check',
        customClass: 'notice-message',
        duration: 6000
      });
    }
  }
</script>

<style>
  .badge-mobile {
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 4px;
  }
  .recovery-card {
    max-width: 570px;
    padding: 0;
    position: relative;
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
  .pre-message {
    padding: 0 100px 32px 100px;
  }
  .text-link {
    text-align: right;
  }
  .notice-message {
    background-color: #FFFFFF;
    border-radius: 4px;
    margin-top: 60px;
    color: #8DC0F3;
    box-shadow: 0px 4px 8px rgba(21, 21, 21, 0.1);
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
