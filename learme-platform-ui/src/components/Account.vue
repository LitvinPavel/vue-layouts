<template>
<div>
  <section>
    <el-row class="container pt4 pt-xs-3 pb3 pb-xs-2 bg-white">
      <el-col :xs="24" :sm="20" :md="24">
        <div class="h1 text-black">Практический курс по хорошему email-маркетингу</div>
        <div class="body-text text-black pt-lg-3 pt-md-2 pt-xs-1">Практический курс по Email-маркетингу. Все элементы успешной СТРАТЕГИИ.</div>
      </el-col>
    </el-row>
  </section>
    
  <section>
    <el-footer class="footer bg-white" height="auto">
    <div class="text-gray footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="text-gray" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</div>
</template>

<script>

export default {
  data: () => ({
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
  @media (min-width: 1200px) {
    .vebroom-video {
      height: 30vw;
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
  }
</style>
