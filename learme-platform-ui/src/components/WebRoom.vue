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
    <el-row class="container pb5 pb-xs-4 bg-white">
      <el-col :xs="24" :md="16">
        <section>
          <iframe width="100%" class="vebroom-video" src="https://www.youtube.com/embed/YJPbOlDXmzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <el-row type="flex" justify="space-between" class="pt2 pt-xs-1 pb-xs-3 pb5">
            <span class="text-link body-text d-inline-flex">
                  <img :src="require('../assets/img/time-icon.svg')" alt="">
                  <span class="pl1">26 мая 2018 в 16:00 по МСК</span>
            </span>
            <span class="body-text text-gray d-inline-flex">
                  <img :src="require('../assets/img/icon/eye.svg')" alt="">
                  <span class="pl1">999</span>
            </span>
          </el-row>
        </section>
        <section class="no-padding">
          <el-card class="bg-light-blue mb4 mb-xs-0" shadow="never">
            <div class="body-text text-center pb2">Краткое описание спецпредложения в одну или несколько строк</div>
            <el-button class="py3" style="width: 100%;" type="primary">Получить спецпредложение</el-button>
          </el-card>
          <el-card class="bg-light-blue mb4 mb-xs-0" shadow="never">
            <el-row class="pb2">
              <el-col :lg="6" :md="24" :sm="6" :xs="7" class="mb-md-3">
                <img :src="require('../assets/img/product/pdf-logo.svg')" alt="webroom-logo" class="webroom-logo" width="160">
              </el-col>
              <el-col :lg="18" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
                <div class="h4">Пошаговое руководство</div>
                <div class="h2 text-black hidden-xs-only mt2">Запуск онлайн-школы</div>
              </el-col>
            </el-row>
            <div class="h2 text-black hidden-sm-and-up py1">Запуск онлайн-школы</div>
            <el-button class="py3" style="width: 100%;" type="primary">Купить за 3 999 ₽</el-button>
          </el-card>
          <el-card class="bg-light-blue" shadow="never">
            <el-row class="pb2">
              <el-col :lg="6" :md="24" :sm="6" :xs="7" class="mb-md-3">
                <img :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="webroom-logo2" class="webroom-logo2" width="160">
              </el-col>
              <el-col :lg="18" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
                <div class="h4">Практический курс</div>
                <div class="h2 text-black hidden-xs-only mt2">Практический курс по email-маркетингу</div>
              </el-col>
            </el-row>
            <div class="h2 text-black hidden-sm-and-up py1">Практический курс по email-маркетингу</div>
            <el-row :gutter="12" type="flex" style="flex-wrap: wrap;">
              <el-col v-for="(item, item_id) in tariffs" :key="item_id" :sm="8">
                <el-card :body-style="{padding: '16px'}" shadow="always" class="text-center">
                  <div class="h4 pb2">{{ item.title }}</div>
                  <el-button class="py2" style="width: 100%;" type="primary">{{ item.btn }}</el-button>
                  <el-button class="text-small" v-if="!item.promo" type="text" @click="item.promo = !item.promo">Есть промокод?</el-button>
                  <el-row class="pt1 text-center" v-else :gutter="2" justify="center">
                    <el-col :sm="12" :lg="19" :xs="19">
                      <el-input size="mini" placeholder="Введите промокод"></el-input>
                    </el-col>
                    <el-col :sm="3" :lg="5" :xs="5">
                      <el-button size="mini" type="primary">OK</el-button>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </el-card>
        </section>
      </el-col>
      <el-col :xs="24" :md="8">
        <img :src="require('../assets/img/course/screen.svg')" alt="comments" style="max-width: 320px;">
      </el-col>
    </el-row>
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
      tariffs: [{
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
    .webroom-logo,
    .webroom-logo2 {
      width: 64px;
    }
  }
</style>
