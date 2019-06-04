<template>
<el-container class="bg-white" style="overflow: hidden; flex-direction: column;" >
  <section class="pt-md-3 pt-lg-3 pt-xs-2">
    <el-row class="container">
        <el-col :span="24">
          <el-row type="flex" class="align-center">
            <el-col :lg="1" :md="1" :sm="2" :xs="4">
              <img class="vebinar-img" :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="vebinar-logo">
            </el-col>
            <el-col :lg="23" :md="23" :sm="22" :xs="20">
              <div class="table-text text-black">Практический курс. Практический курс по хорошему email-маркетингу</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="align-center">
            <el-col :lg="21" :xs="24" class="pt-xs-3 pt-md-4 pt-lg-4">
              <div class="h3 text-gray">Урок 2</div>
              <div class="h1 text-black">Teaching Young Learners a Foreign Second Language</div>
              <div class="subtitle text-black pt-lg-2">Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
            </el-col>
          </el-row>
          <div class="divider my-lg-5 mt-md-3 mt-xs-3"></div>
        </el-col>
        
      </el-row>
      
  </section>
  <section class="main-index-page">
    <el-row class="container">
        <el-row class=""  :gutter="20">
            <el-col :md="5" :xs="24">
              <div class="pt-lg-3 lesson-menu-wrapp">
                <div class="h4 text-black pl3 headline-menu">Меню курса</div>
                <SideBarMenu></SideBarMenu>
                <div class="divider mt1"></div>
                <el-row>
                  <el-col :lg="24" :sm="12" :xs="24">
                    <el-menu
                      style="border-right: 0;"
                      background-color="transparent"
                      text-color="#151515"
                      active-text-color="#1A80E6">
                      <el-menu-item index="1" class="mr-md-2">
                        <span class="el-icon-new-progress"></span>
                        <span class="h5">Материалы</span>
                      </el-menu-item>
                    </el-menu>
                  </el-col>
                  <el-col :lg="24" :sm="12" :xs="24">
                    <el-row type="flex" class="progress pb-lg-3 px-lg-3 pb1 px1">
                      <el-col :lg="24" style="display: flex; align-items: flex-end;">
                        <div class="small-text">Ваш прогресс</div>
                      </el-col>
                      <el-col :lg="24">
                        <div class="tiny-text text-gray" style="margin-bottom: -7px;">4 урок из 16</div>
                        <el-progress :percentage="40"></el-progress>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
              </div>
                
            </el-col>
        <el-col :md="19" :xs="24">
            <el-row>
              <el-col :lg="20" :xs="24">
                <div class="h3 text-black pb1">H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black pb3">Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</div>
                <div class="h3 text-black pb1">H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black pb3">Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</div>
              </el-col>
              <el-col :lg="20" :xs="24">
                <img :src="require('../assets/img/course/banner-top.svg')" width="100%" alt="">
              </el-col>
              <el-col :lg="4" :xs="24">
                dfgdfgdfgdfgg
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
.vebinar-img {
  width: 40px;
}
.progress {
  flex-direction: column;
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
  .lesson-menu-wrapp {
    background: #F1F7FD;
  }
  @media (max-width: 992px) {
    .progress {
      flex-direction: row;
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
    .lesson-menu-wrapp {
      background: #fff;
    }
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
    .vebinar-img {
      width: 32px;
    }
  }
</style>
