<template>
      <el-row class="main-row">
        <div class="m-auto">
          <el-card class="recovery-card">
            <el-button 
              size="mini"
              style="position: absolute; right: 10px; top: 10px;border-radius: 4px;border-color: #66CC33; color: #66CC33;"  
              plain
              class="hidden-xs-only"
            >
              <div style="display:flex;align-items:center;">
                <img :src="musicOn" alt="">
              <span>Включить музыку</span>
              </div>
            </el-button>
              
              <img :src="successVeb" width="100%" class="pt0">
          <div class="h3 text-center pt-lg-4 pt-md-4 pb-lg-1 pb-md-1 px-lg-4 px-md-4 p-xs-1">Название вебинара в несколько сторк</div>
          <div class="text-center table-text px5 px-xs-3">
            Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк
          </div>
          <div style="display: flex; align-item:center; justify-content:center;" class="text-link body-text pt4 pt-xs-3">
                <img :src="timeIcon" alt="">
                <span>26 мая 2018 в 16:00 по МСК</span>
            </div>
            <div class="text-center table-text">мероприятие еще не началось</div>
            <el-row class="py3 px4">
                <el-col :md="12" :xs="24" class="text-center px2 pb-xs-1">
                    <el-button style="width: 100%;border-radius: 4px;border-color: #F59A3E; color: #F59A3E;" plain size="mini">
                      <div style="display:flex;align-items:center; justify-content:center;">
                        <img :src="calendar" alt="">
                        <span class="pl1">Добавить в календарь</span>
                      </div>
                    </el-button>
                </el-col>
                <el-col :md="12" :xs="24" class="text-center px2 pb-xs-3">
                    <el-button style="width: 100%;border-radius: 4px;border-color: #F59A3E; color: #F59A3E;" plain size="mini">
                      <div style="display:flex;align-items:center; justify-content:center;">
                        <img :src="messanger" alt="">
                        <span class="pl1">Напомнить в мессенджере</span>
                      </div>
                    </el-button>
                </el-col>
                <el-col :md="12" :xs="24" class="text-center px2 hidden-sm-and-up">
                    <el-button 
                      size="mini"
                      style="border-radius: 4px;border-color: #66CC33; color: #66CC33;"  
                      plain
                    >
                      <div style="display:flex;align-items:center;">
                        <img :src="musicOn" alt="">
                      <span>Включить музыку</span>
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
    successVeb: require('../assets/img/vebinar/banner.svg'),
    musicOn: require('../assets/img/music-value-on.svg'),
    timeIcon: require('../assets/img/time-icon.svg'),
    calendar: require('../assets/img/icon/calendar.svg'),
    messanger: require('../assets/img/icon/event-messanger.svg')
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
.recovery-card {
  max-width: 570px;
  padding: 0;
  position: relative;
}
.recovery-card > .el-card__body {
  padding: 0 !important;
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
