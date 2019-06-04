<template>
  <el-container style="overflow: hidden; flex-direction: column;">
    <div class="hidden-sm-and-up">
      <img :src="require('../assets/img/course/banner-top.svg')" width="100%">
    </div>
    <section class="pt-md-5 pt-lg-5">
      <el-row class="container">
        <el-col :span="24">
          <el-row class="hidden-xs-only">
            <el-col :lg="4" :md="6" :sm="6" class="mb-md-3">
              <img class="vebinar-img" :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="vebinar-logo">
            </el-col>
            <el-col :lg="20" :md="18" :sm="18" :xs="17" class="mb-md-3 text-black">
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
        <el-row class="column-reverse" :gutter="20">
          <el-col :md="4" :xs="24">
            <div class="h4 text-black pt5 mt3 pl3 headline-menu">Меню курса</div>
            <SideBarMenu></SideBarMenu>
          </el-col>
          <el-col :md="14" :xs="24">
            <div class="h2 text-black pb3">Учебный план</div>
            <el-card shadow="never">
              <el-row type="flex" class="align-center justify-space-between pb1">
                <div class="text-link h5 bold">Урок 1</div>
                <el-button size="mini" style="padding-top: 3px; padding-bottom: 3px;text-transform: uppercase;" round type="success">Пройден</el-button>
              </el-row>
              <el-row>
                <el-col :xs="24" :sm="20">
                  <div class="body-text text-gray bold">Teaching Young Learners a Foreign/Second Language</div>
                  <div class="table-text text-gray">Самые сложные задачи, стоящие перед учителем английского языка при обучении Young learners. Почему и как методика Letterland помогает эти задачи решать эффективно.</div>
                </el-col>
              </el-row>
            </el-card>
            <el-card shadow="never">
              <div class="text-link h5 pb1 bold">Урок 2</div>
              <el-row>
                <el-col :xs="24" :sm="20">
                  <div class="body-text text-black bold">Phonics & multisensory literacy teaching</div>
                  <div class="table-text text-black">Что такое phonics и что такое multisensory language approach - что важно знать об этом учителю EFL, работающему с Young Learners</div>
                </el-col>
                <el-col :xs="24" :sm="4" class="text-right">
                  <el-button plain class="m_btn" type="primary">Открыть</el-button>
                </el-col>
              </el-row>
            </el-card>
            <el-card :body-style="{ padding: '0' }" shadow="never">
              <el-collapse accordion class="custom-accordion">
                <el-collapse-item v-for="(item, item_id) in parts" :name="item_id+1" :key="item_id" class="pt3" style="padding-left:20px;padding-right:20px;">
                  <template slot="title">
                    <svg class="custom-accardion__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z" stroke="#E0E0E0"/>
                      <path d="M18 9L12 15L6 9" stroke="#9E9E9E"/>
                    </svg>
                    <span class="pl2 pl-xs-1 h5 bold">{{item}}</span>
</template>
              <div class="pl-lg-4 pl-md-4 ml1">
                <el-row>
                  <el-col :xs="24" :sm="15">
                    <div class="text-link table-text">Введение</div>
                    <div class="body-text text-black bold">Подготовка проекта</div>
                  </el-col>
                  <el-col :xs="24" :sm="9" class="text-right">
                    <el-button plain class="m_btn" disabled>доступ откроется 23.08.2019</el-button>
                  </el-col>
                </el-row>
                
                <el-divider></el-divider>
                <el-row type="flex" class="align-center justify-space-between pb1">
                  <div class="text-link table-text">Шаг 1</div>
                  <el-button size="mini" style="padding-top: 3px; padding-bottom: 3px;text-transform: uppercase;" round type="warning">в процессе</el-button>
                </el-row>
                <el-row>
                  <el-col :xs="24" :sm="15">
                  <div class="body-text text-black bold">Определить спонсора</div>
                <div class="text-black table-text">
                  <span>В этом уроке вы узнаете:</span>
                  <ul class="my0 table-text">
                    <li>Кто такой спонсор</li>
                    <li>Зачем он нужен</li>
                    <li>Как с ним работать</li>
                  </ul>
                </div>
                  </el-col>
                  <el-col :xs="24" :sm="9" class="text-right">
                    <el-button plain class="m_btn" type="primary">Открыть</el-button>
                  </el-col>
                </el-row>
                
                <el-divider></el-divider>
              </div>
            </el-collapse-item>
            
          </el-collapse>
        </el-card>
        <el-card shadow="never">
          <div class="text-link h5 pb1 bold">Текст</div>
          <el-row>
                  <el-col :xs="24" :sm="15">
                  <div class="body-text text-black bold">Key points learned</div>
                  </el-col>
                  <el-col :xs="24" :sm="9" class="text-right">
                    <el-button plain class="m_btn" type="primary">Пройти тест</el-button>
                  </el-col>
                </el-row>
          
        </el-card>
        
        </el-col>
        <el-col :md="6" :xs="24">
          <div class="h4 text-black pb3 mt2">Анонсы</div>
          <el-card 
            :body-style="{ padding: '0px' }" 
            v-for="(announce, announce_id) in announces" 
            :key="announce_id+'announce'"
            class="mb2 announce-wrapp"
            >
      <div class="announce-img" :style="{background: `url(${announce.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}"></div>
 
      <div style="padding: 14px;">
        <div class="small-text text-gray pb1" style="text-transform: uppercase;letter-spacing: 0.1em;">{{ announce.category }}</div>
        <div class="table-text text-black bold pb1">{{ announce.title }}</div>
        <div class="d-flex align-center text-link tiny-text">
          <img class="pr1" v-if="announce.link.img" :src="announce.link.img" alt="">
          <span >{{ announce.link.text }}</span>
        </div>
      </div>
    </el-card>
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
    components: {
      SideBarMenu
    },
    data: () => ({
      parts: [
        'Часть 1 Подготовка проекта',
        'Часть 2 Планирование цикла',
        'Часть 3 Планирование цикла'
      ],
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
        }
      ]
    })
  }
</script>

<style>
  .vebinar-img {
    width: 170px;
  }
  .announce-img {
    height: 150px;
    width: 100%;
  }
  .custom-accordion .el-collapse-item__arrow {
    display: none;
  }
  .custom-accardion__arrow {
    transition: transform .3s, -webkit-transform .3s;
  }
  .custom-accordion .is-active {
    color: #1A80E6;
  }
  .custom-accordion .is-active .custom-accardion__arrow {
    transform: rotate(180deg);
  }
  .custom-accordion .is-active .custom-accardion__arrow path {
    stroke: #1A80E6;
  }
  .main-index-page {
    padding-top: 24px;
  }
  @media (max-width: 992px) {
    .vebinar-img {
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
      order: 3;
    }
    .column-reverse>div:nth-of-type(3) {
      order: 2;
    }
    .main-index-page {
      padding-top: 0;
    }
    .headline-menu {
      display: none;
    }
    .announce-wrapp>.el-card__body {
      display: flex;
      flex-direction: row;
    }
    .announce-img {
      height: auto;
      width: 162px;
    }
  }
  @media (max-width: 767px) {
    .announce-img {
      width: 72px;
    }
    .m_btn {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-top: 8px;
    }
  }
</style>
