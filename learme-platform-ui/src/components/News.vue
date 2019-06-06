<template>
<el-container style="overflow: hidden; flex-direction: column;" >
  <div class="hidden-sm-and-up">
    <img :src="require('../assets/img/course/banner-top.svg')" width="100%">
  </div>
  <section class="pt-md-5 pt-lg-5">
    <el-row class="container">
        <el-col :span="24">
          <el-row class="hidden-xs-only">
            <el-col :lg="5" :md="6" :sm="6" class="mb-md-3">
              <img class="news-img" :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="vebinar-logo">
            </el-col>
            <el-col :lg="19" :md="18" :sm="18" :xs="17" class="mb-md-3 text-black">
              <div class="small-text text-gray pb1 hidden-xs-only pb1" style="text-transform: uppercase;letter-spacing: 0.1em;">Практический курс</div>
              <div class="h1 text-black hidden-xs-only pb1">Практический курс по хорошему email-маркетингу</div>
              <div class="body-text text-black hidden-sm-and-down">Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
            </el-col>
          </el-row>
          <div class="small-text text-gray pt1 hidden-sm-and-up" style="text-transform: uppercase;letter-spacing: 0.1em;">Практический курс</div>
          <div class="h2 text-black hidden-sm-and-up py1">Практический курс по хорошему email-маркетингу</div>
          <div class="body-text text-black hidden-md-and-up mb3">Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
        <el-divider></el-divider>
        </el-col>
        
      </el-row>
  </section>
  <section class="main-index-page">
    <el-row class="container">
        <el-row class="column-reverse"  :gutter="20">
            <el-col :md="4" :xs="24">
                <div class="h4 text-black pt5 mt3 headline-menu">Меню курса</div>
                <SideBarMenu></SideBarMenu>
            </el-col>
        <el-col :md="20" :xs="24">
            <div class="h2 text-black pb3">Новости</div>
            <el-row type="flex" style="flex-wrap: wrap;">
              <el-col  class="d-flex pr-md-2 pr-lg-2" :md="8" :sm="12" v-for="(announce, announce_id) in announces" 
                  :key="announce_id+'announce'">
                <el-card
                  shadow="hover"
                  :body-style="{padding: '0', display: 'flex', flexDirection: 'column', height: '100%'}"
                  style="width: 270px;"
                  class="mb2 announce-wrapp"
                  >
                  <div style="flex: 0 0 auto;" class="announce-img" :style="{background: `url(${announce.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}"></div>
                    <div style="flex: 1 0 auto; padding: 14px 14px 0 14px">
                      <div class="small-text text-gray pb1" style="text-transform: uppercase;letter-spacing: 0.1em;">{{ announce.category }}</div>
                      <div class="table-text text-black bold pb1">{{ announce.title }}</div>
                    </div>
                  <div style="flex: 0 0 auto; padding: 0 14px 14px 14px" class="d-flex align-center text-link tiny-text">
                      <img class="pr1" v-if="announce.link.img" :src="announce.link.img" alt="">
                      <span >{{ announce.link.text }}</span>
                    </div>
                </el-card>
              </el-col>
            </el-row>
        </el-col>
        </el-row>
      </el-row>
  </section>
    
  <section class="mt5 mb3">
    <el-footer class="footer" height="auto">
    <div class="text-gray footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="text-gray" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</el-container>
</template>

<script>
import SideBarMenu from './SideBarMenu'
export default {
    components: { SideBarMenu },
    data: () => ({
      announces: [{
          src: require('../assets/img/account/course-img-1.svg'),
          category: 'Вебинар',
          title: 'Как рассылка влияет на показатели бизнеса',
          link: {
            img: require('../assets/img/time-icon.svg'),
            text: '26 мая 2018 в 16:00 по МСК'
          }
        },
        {
          src: require('../assets/img/account/course-img-2.svg'),
          category: 'Новости',
          title: 'Новый тариф для авторов',
          link: {
            text: 'Узнать подробности'
          }
        },
        {
          src: require('../assets/img/account/course-img-3.svg'),
          category: 'Новый курс',
          title: 'Как казаться успешным и вызывать зависть окружающих',
          link: {
            text: 'Узнать секрет'
          }
        },
        {
          src: require('../assets/img/account/course-img-3.svg'),
          category: 'Новый курс',
          title: 'Как казаться успешным и вызывать зависть окружающих',
          link: {
            text: 'Узнать секрет'
          }
        }
      ]
    })
}
</script>

<style>
.news-img {
  width: 170px;
}
.announce-img {
    height: 150px;
    width: 100%;
  }
  .announce-wrapp {
    width: 100% !important;
  }
  .main-index-page {
      padding-top: 24px;
  }
  @media (max-width: 992px) {
    .news-img {
      width: 162px;
    }
    .column-reverse {
      display: flex;
      flex-direction: column;
    }
    .column-reverse>div:nth-of-type(1) {
      order: 1;
    }
    .column-reverse>div:nth-of-type(2) {
      order: 2;
    }
    /* .announce-wrapp {
      width: 348px;
    } */
    .main-index-page {
      padding-top: 0;
    }
    .headline-menu {
      display: none;
    }


  }
  @media (max-width: 767px) {
    .m_btn {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-top: 8px;
    }
    /* .announce-wrapp {
      width: 288px;
    } */
  }
</style>
