<template>
<el-container style="overflow: hidden; flex-direction: column;" >
  <section>
    <el-row class="tabs-btn container pt4 pt-xs-3 pb3 pb-xs-2" type="flex">
      <el-col :xs="24" :sm="16" :md="19">
        <el-radio-group v-model="tabs">
          <el-radio-button label="courses"><span>Курсы</span></el-radio-button>
          <el-radio-button label="vebinars"><span>Вебинары</span></el-radio-button>
          <el-radio-button label="products"><span>Продукты</span></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :xs="24" :sm="8" :md="5" class="pt-xs-2">
        <el-button 
          class="py2"
          style="font-size: 18px;line-height: 18px;letter-spacing: 0.04em;text-transform: uppercase; width: 100%;" 
          type="primary" 
        >
          <div style="display: flex; align-items: center;">
            <img :src="require('../assets/img/icon/plus-circle-fill.svg')" alt="">
            <span class="pl1">Создать курс</span>
          </div>
        </el-button>
      </el-col>
    </el-row>
  </section>
  <section>
    <el-row :gutter="20" class="container">
      <el-col class="pb3" :xs="24" :sm="12" :md="8" v-for="i in 5" :key="i">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" width="370" height="320">
          <div class="px2 pt1 pb3">
            <el-row type="flex">
              <el-col :span="9" style="display: flex; align-items: flex-end;">
                <div>Ваш прогресс</div>
              </el-col>
              <el-col :span="15">
                <div class="tiny-text text-gray" style="margin-bottom: -7px;">5 урок из 10</div>
                <el-progress :percentage="50"></el-progress>
              </el-col>
            </el-row>
            <el-row type="flex">
              <el-col :span="15" style="display: flex; align-items: center;">
                <div style="letter-spacing: 0.05em;text-transform: uppercase;" class="tiny-text text-gray">Обучающий онлайн курс</div>
              </el-col>
              <el-col :span="9">
                <el-button size="mini" round type="warning">Черновик</el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
    
  <section>
    <el-footer class="footer" height="auto">
    <div class="text-gray footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="text-gray" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</el-container>
</template>

<script>

export default {
  data: () => ({
    tabs: 'courses',
    tariffs: [
      {
        title: 'Тариф номер один',
        btn: 'Бесплатно',
        promo: false
      },
      {
        title: 'Тариф номер два',
        btn: 'Оплатить 9 999 ₽',
        promo: false
      },
      {
        title: 'Третий тарифный план',
        btn: 'Оплатить 199 999 ₽',
        promo: false
      }
    ]
  }),
  
}
</script>

<style>
  .tabs-btn {
    align-items: center;
  }
  @media (min-width: 1200px) {
    .vebroom-video {
      height: 30vw;
    }
    .el-radio-button__inner {
      padding: 12px 0;
      width: 257px;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    .vebroom-video {
      height: 45vw;
    }
    .no-padding {
      margin-left: -24px !important;
      margin-right: -24px !important;
    }
    .el-radio-button__inner {
      padding: 12px 0;
      width: 147px;
    }
  }
  @media (max-width: 767px) {
    .vebroom-video {
      height: 45vw;
    }
    .no-padding {
      margin-left: -16px !important;
      margin-right: -16px !important;
    }
    .webroom-logo, .webroom-logo2 {
      width: 64px;
    }
    .el-radio-button__inner {
      padding: 12px 0;
      width: 96px;
    }
    .tabs-btn {
      flex-direction: column;
    }
  }
</style>
