<template>
<div>
  <section>
    <div class="subheader-img bg-white">
      <img :src="banner" width="100%">
    </div>
    <el-row class="container pt4 pt-xs-3 pb5 pb-xs-4 bg-white">
      <el-col :xs="24" :sm="15" :md="17">
        <div class="small-text text-gray" style="text-transform: uppercase;letter-spacing: 0.1em;">Практический курс</div>
        <div class="h1 text-black">Практический курс по email-маркетингу</div>
        <div class="body-text text-black pt-lg-3 pt-md-2 pt-xs-1">Практический курс по Email-маркетингу. Все элементы успешной СТРАТЕГИИ.</div>
      </el-col>
      <el-col :xs="24" :sm="9" :md="7" class="mt-xs-3">
        <el-card :body-style="{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }" shadow="never">
          <div class="text-center body-text text-black pb2 pb-xs-1" >
            Стоимость
          </div>
          <div class="text-center h3 text-black">
            от 160 999 ₽
          </div>
          <div class="text-center small-text text-gray">
            Цена начального тарифа
          </div>
          <el-button class="mt3 mt-xs-2" type="primary">Смотреть тарифы</el-button>
          <div class="small-text text-link text-center mt1">
            Есть промокод?
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="container pt4 pt-xs-3 pb5 pb-xs-4 bg-white">
      <iframe width="100%" style="height: 45vw;" src="https://www.youtube.com/embed/YJPbOlDXmzQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </el-row>
  </section>
  <section class="bg-white">
    <el-row class="container column-reverse" type="flex">
      <el-col :lg="14" :md="12" :xs="24">
        <el-row>
          <el-col :sm="20" class="pt-xs-5 pt-md-5 pt-lg-0">
            <div class="h3 text-black">Рассказ о вебинаре с красивым названием</div>
            <div class="body-text py2 text-black">
              <p>В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</p>
              <p>Выигрывают те из вас, кто начинает чаще выступать – не важно, это тост в кругу семьи или небольшой урок в школе, где учится ваш ребенок. Мы не можем научиться выступать, если не делаем это. В течение многих лет я наблюдаю за своими учениками.</p>
              <p>Вывод простой – хорошими спикерами становятся те из вас, кто больше работает и учится на своих ошибках. Советую делать упражнения, привлекая друзей, родственников, взрослых детей. </p>
              <p>Таким образом, вы будете иметь обратную связь от «слушателей», а без этого хорошим спикером стать невозможно. Потому что самое главное – это не сказать, а запомниться!</p>
              <p>Желаю успеха!</p>
            </div>

          </el-col>
        </el-row>
      </el-col>
      <el-col :lg="10" :md="12" :xs="24">
        <el-row :gutter="20">
          <el-col class="pt3 card-wrapper">
            <el-card class="recovery-card" shadow="never">
              <el-row>
                <el-col :lg="6" :xs="24">
                  <img :src="spicer" alt="" width="104">
                </el-col>
              <el-col :lg="18" :xs="24" class="pl-lg-2">
                <div class="small-text">Автор курса</div>
                <div class="h5">Константин Константинопольский</div>
                <div class="small-text text-gray">Генеральный директор GetResponse Россия – платформы для комплексного email-маркетинга</div>
              </el-col>
              <el-col :span="24" class="pt3 p-md-1 p-xs-1 pb3 pb-xs-2">
                <div class="small-text text-black" style="text-align:left;">
                  <p>GetResponse одна из самых популярных платформ рассылок в РФ и в мире, победитель конкурса EmailShow 2016 и 2017.</p>
                  <p>Email/CRM-маркетингом занимаюсь уже более 10 лет. Принимал участие в запуске Email-маркетинга в сотнях проектов и в малом бизнесе и для крупнейших игроков онлайн/оффлайн ритейла, банковской и туристической отраслей, рынка образовательных услуг и др. Разработал курсы и преподаю Email маркетинг в бизнес-школах Синергия, Нетология, RMA, Бизнес Молодость. Помогаю компаниям строить крепкие отношения с клиентами.</p>
                  </div>
              </el-col>
              <img :src="chatQuestion" alt="">
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </section>
  <section>
    <el-row  class="container py5 py-xs-4">
      <el-col :xs="24" :md="17" class="pr-lg-2">
        <div class="h2 text-black mb3 mb-xs-2">Учебный план</div>
        <el-card>
          <div class="text-link h5 pb1 bold">Урок 1</div>
          <div class="body-text text-black bold">Teaching Young Learners a Foreign/Second Language</div>
          <div class="table-text text-black">Самые сложные задачи, стоящие перед учителем английского языка при обучении Young learners. Почему и как методика Letterland помогает эти задачи решать эффективно.</div>
        </el-card>
        <el-card>
          <div class="text-link h5 pb1 bold">Урок 1</div>
          <div class="body-text text-black bold">Teaching Young Learners a Foreign/Second Language</div>
          <div class="table-text text-black">Самые сложные задачи, стоящие перед учителем английского языка при обучении Young learners. Почему и как методика Letterland помогает эти задачи решать эффективно.</div>
        </el-card>
        <el-card :body-style="{ padding: '0' }">
          <el-collapse accordion class="custom-accordion" >
            <el-collapse-item v-for="(item, item_id) in parts" :name="item_id+1" :key="item_id" class="pt3" style="padding-left:20px;padding-right:20px;">
              <template slot="title">
                <svg class="custom-accardion__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z" stroke="#E0E0E0"/>
                  <path d="M18 9L12 15L6 9" stroke="#9E9E9E"/>
                </svg>
                <span class="pl2 pl-xs-1 h5 bold">{{item}}</span>
              </template>
              <div class="pl4 ml1">
                <div class="text-link table-text">Введение</div>
                <div class="body-text text-black bold">Подготовка проекта</div>
                <el-divider></el-divider>
                <div class="text-link table-text">Введение</div>
                <div class="body-text text-black bold">Подготовка проекта</div>
                <div class="text-black table-text">
                  <span>В этом уроке вы узнаете:</span>
                  <ul class="my0 table-text">
                    <li>Кто такой спонсор</li>
                    <li>Зачем он нужен</li>
                    <li>Как с ним работать</li>
                  </ul>
                </div>
                <el-divider></el-divider>
              </div>
            </el-collapse-item>
            
          </el-collapse>
        </el-card>
        <el-card>
          <div class="text-link h5 pb1 bold">Текст</div>
          <div class="body-text text-black bold">Key points learned</div>
        </el-card>
        <el-button class="mt3" type="primary" plain>Показать все уроки</el-button>
      </el-col>
      <el-col :xs="24" :md="7">
        <div class="h4 text-black mb4 pt-lg-1 my-xs-2">Преимущества</div>
        <el-card class="mb2" :body-style="{ display: 'flex', alignItems: 'center', padding: '16px' }">
            <img :src="lesson" alt="">
            <div class="pl2">
              <div class="h5 bold text-black">13 уроков</div>
              <div class="tiny-text text-dark">без домашних заданий</div>
            </div>
        </el-card>
        <el-card class="mb2" :body-style="{ display: 'flex', alignItems: 'center', padding: '16px' }">
            <img :src="require('../assets/img/course/cross-access.svg')" alt="">
            <div class="pl2">
              <div class="h5 bold text-black">13 уроков</div>
              <div class="tiny-text text-dark">без домашних заданий</div>
            </div>
        </el-card>
        <el-card :body-style="{ display: 'flex', alignItems: 'center', padding: '16px' }">
            <img :src="require('../assets/img/course/guarant-back.svg')" alt="guarant-back">
            <div class="pl2">
              <div class="h5 bold text-black">13 уроков</div>
              <div class="tiny-text text-dark">без домашних заданий</div>
            </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
  <section style="background: #1A80E6;" class="py-xs-3 py-md-5 py-lg-5">
    <div class="h2 text-white px-md-3 pb-md-3 px-xs-2 pt-xs-3 pb-xs-3 px-lg-6 mx-lg-1 pb-lg-3">Отзывы о курсе</div>
    <el-carousel  ref="heightDesk" class="hidden-sm-and-down" arrow="always" :autoplay="false"  :interval="0" :style="{height:`${heightDesk}px`}">
        <el-carousel-item  v-for="(review, review_id) in reviewsDesc" :key="review_id+'desk'">
            <el-row class="container" :gutter="30" style="flex-wrap: wrap;">
              <el-col class="heightIndex" :span="8" v-for="(item, item_id) in review" :key="item_id" style="padding-top:60px;display: flex;">
              <el-card style="overflow: visible;">
                <img :src="item.avatar" style="margin-top: -60px;">
                <div class="py3">
                  <div class="h4 text-black">{{ item.name }}</div>
                  <div>
                    <div class="tiny-text text-gray">{{item.description}}</div>
                    <div class="small-text text-black pt2">{{item.text}}</div>
                  </div>
                </div>
              </el-card>
            </el-col>
            </el-row>
        </el-carousel-item>
      </el-carousel>
      <el-carousel ref="heightMob" class="hidden-md-and-up carousel-mob-tab" arrow="always" :autoplay="false"  :interval="0"  :style="{height:`${heightMob}px`}">
        <el-carousel-item v-for="(item, item_id) in reviews" :key="item_id+'mob'">
          <el-col :span="24" class="carousel-card-wrapper px-xs-2 heightIndex">
              <el-card :body-id="'body'" :body-style="{ padding: '0' }" class="px-xs-2 px-md-3" style="overflow: visible;" :id="'card'+item_id">
                <img :src="item.avatar" class="carousel-card-avatar">
                <div class="py-xs-2 py-md-3">
                  <div class="h4 text-black">{{ item.name }}</div>
                  <div >
                    <div class="tiny-text text-gray">{{item.description}}</div>
                    <div class="small-text text-black pt2">{{item.text}}</div>
                  </div>
                </div>
              </el-card>
            </el-col>
        </el-carousel-item>
      </el-carousel>
  </section>
  <section class="py-xs-3 py-md-5 py-lg-5 bg-white">
    <div class="h2 text-black px-md-3 pb-md-3 px-xs-2 pt-xs-3 pb-xs-3 px-lg-6 mx-lg-1 pb-lg-3">Тарифы</div>
    <el-row class="container" type="flex" style="flex-wrap: wrap; margin-left: 0;margin-right: 0;">
              <el-col class="px1" :lg="8" :xs="24" :sm="24" v-for="(item, item_id) in tariffs" :key="item_id" style="display: flex;">
              <el-card :body-style="{padding: '0', display: 'flex', flexDirection: 'column', height: '100%'}" class="my-xs-2 my-md-3" style="width: 100%;">
                <div style="padding-top:8px; background: #1A80E6; border-radius: 4px 4px 0px 0px; flex: 0 0 auto;"></div>
                <div style="flex: 1 0 auto;">
                  <div class="h4 text-black p3">{{ item.title }}</div>
                  <div class="h2 text-black p3 bg-light-blue">{{ item.price }}</div>
                  <div class="pl3 py3 pr4 small-text text-gray">
                    <p v-for="(option, option_id) in item.options" :key="option_id">{{option}}</p>
                  </div>
                </div>
                <div class="p3 text-center" style="flex: 0 0 auto;">
                  <el-button class="bold" style="width: 100%;" type="primary" plain>{{item.btn}}</el-button>
                  <el-button class="text-small" v-if="!item.promo" type="text" @click="item.promo = !item.promo">Есть промокод?</el-button>
                  <el-row class="pt1" v-else :gutter="5" :justify="center">
                    <el-col :span="17">
                      <el-input size="mini" placeholder="Введите промокод"></el-input>
                    </el-col>
                    <el-col :span="7">
                      <el-button size="mini" type="primary">OK</el-button>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
            </el-col>
            </el-row>
  </section>
  <section class="my5">
    <el-row class="container py2">
      <el-col>
        <el-row>
          <el-col :lg="24" :md="24" :sm="6" :xs="7" class="mb-md-3">
            <img class="vebinar-img" :src="vebLogo" alt="vebinar-logo">
          </el-col>
          <el-col :lg="24" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
            <div class="h4">17 апреля 2019, ср в 18:30 по Москве</div>
            <div class="h5">начало через 3 дня</div>
            <div class="h2 text-black hidden-xs-only">Вебинар с красивым названием</div>
          </el-col>
        </el-row>
        <div class="h2 text-black hidden-sm-and-up py1">Вебинар с красивым названием</div>
      </el-col>
      <el-col class="pt2">
          <el-row type="flex" class="footer-btn-send">
              <el-button style="background: #DF5D39; border-color: #DF5D39;" class="py2" type="primary">Зарегистрироваться</el-button>
          </el-row>
      </el-col>
    </el-row>
    <el-footer class="footer" height="auto">
    <div class="secondary-text footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="secondary-text" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</div>
</template>

<script>

export default {
  data: () => ({
    vebLogo: require('../assets/img/vebinar/vebinar-logo.svg'),
    chatQuestion: require('../assets/img/social/telegram-chat-question.svg'),
    spicer: require('../assets/img/vebinar/spicer.svg'),
    banner: require('../assets/img/course/banner-top.svg'),
    lesson: require('../assets/img/course/lesson.svg'),
    parts: [
      'Часть 1 Подготовка проекта',
      'Часть 2 Планирование цикла',
      'Часть 3 Планирование цикла'
    ],
    reviews: [
      {
        avatar: require('../assets/img/course/reviews1.svg'),
        name: 'Оксана Гаева',
        description: 'АВТОРИЗОВАННЫЙ ПРЕДСТАВИТЕЛЬ В РОССИИ LETTERLAND INTERNATIONAL',
        text: 'Я начала я с одного курса, а сегодня у меня их уже четыре. Создание онлайн курса может занимать разное время. Например, курс для учителей я создавала несколько недель. А размещение курса на платформе занимает очень мало времени. Очень здорово, что платформа создает вам качественную лендинговую страницу для вашего курса, это очень важный момент для продвижения. И конечно же, функция приема платежей — это тоже один из ключевых моментов, почему я выбрала эту платформу. Удобство оплаты для пользователей — второй ключевой момент продвижения вашего курса, и здесь это заработало классно!'
      },
      {
        avatar: require('../assets/img/course/reviews1.svg'),
        name: 'Оксана Гаева',
        description: 'АВТОРИЗОВАННЫЙ ПРЕДСТАВИТЕЛЬ В РОССИИ LETTERLAND INTERNATIONAL',
        text: 'Я начала я с одного курса, а сегодня у меня их уже четыре. Создание онлайн курса может занимать разное время. Например, курс для учителей я создавала несколько недель. А размещение курса на платформе занимает очень мало времени. Очень здорово, что платформа создает вам качественную лендинговую страницу для вашего курса, это очень важный момент для продвижения. И конечно же, функция приема платежей — это тоже один из ключевых моментов, почему я выбрала эту платформу. Удобство оплаты для пользователей — второй ключевой момент продвижения вашего курса, и здесь это заработало классно!'
      },
      {
        avatar: require('../assets/img/course/reviews1.svg'),
        name: 'Оксана Гаева',
        description: 'АВТОРИЗОВАННЫЙ ПРЕДСТАВИТЕЛЬ В РОССИИ LETTERLAND INTERNATIONAL',
        text: 'Я начала я с одного курса, а сегодня у меня их уже четыре. Создание онлайн курса может занимать разное время. Например, курс для учителей я создавала несколько недель. А размещение курса на платформе занимает очень мало времени. Очень здорово, что платформа создает вам качественную лендинговую страницу для вашего курса, это очень важный момент для продвижения. И конечно же, функция приема платежей — это тоже один из ключевых моментов, почему я выбрала эту платформу. Удобство оплаты для пользователей — второй ключевой момент продвижения вашего курса, и здесь это заработало классно!'
      },
      {
        avatar: require('../assets/img/course/reviews1.svg'),
        name: 'Оксана Гаева',
        description: 'АВТОРИЗОВАННЫЙ ПРЕДСТАВИТЕЛЬ В РОССИИ LETTERLAND INTERNATIONAL',
        text: 'Я начала я с одного курса, а сегодня у меня их уже четыре. Создание онлайн курса может занимать разное время. Например, курс для учителей я создавала несколько недель. А размещение курса на платформе занимает очень мало времени. Очень здорово, что платформа создает вам качественную лендинговую страницу для вашего курса, это очень важный момент для продвижения. И конечно же, функция приема платежей — это тоже один из ключевых моментов, почему я выбрала эту платформу. Удобство оплаты для пользователей — второй ключевой момент продвижения вашего курса, и здесь это заработало классно!'
      }
    ],
    tariffs: [
      {
        title: 'Тариф номер один',
        price: 'Бесплатно',
        btn: 'Выбрать тариф',
        promo: false,
        options: ['Без ограничений по числу курсов и учеников','Свой домен школы (при оплате за год)','Подключение приёма платежей с комиссией 10%',]
      },
      {
        title: 'Тариф номер два',
        price: 'от 19 999 ₽/мес.',
        btn: 'Оплатить 19 999 ₽',
        promo: false,
        options: ['Без ограничений по числу курсов и учеников','Свой домен школы (при оплате за год)','Подключение приёма платежей с комиссией 6%','Техподдержка по почте','Интеграция с любой системой приема платежей',]
      },
      {
        title: 'Третий тариф',
        price: '199 999 ₽/мес.',
        btn: 'Оплатить 199 999 ₽',
        promo: false,
        options: ['Без ограничений по числу курсов и учеников','Свой домен школы (при оплате за год)','Подключение приёма платежей с комиссией 1%','Техподдержка по почте','Интеграция с любой системой приема платежей','Отсутствие бренда Learme в дизайне интерфейса',]
      }
    ],
    reviewsMob: [],
    reviewsDesc: [],
    heightDesk: 0,
    heightMob: 0,
    isPromocode: false,
    windowWidth: window.innerWidth

  }),
  created() {
    this.reviewsMob = this.reviews
    this.reviewsDesc = this.reviews.map((_, i, a) => a.slice(i * 3, i * 3 + 3)).filter((el) => el.length)
  },
  mounted() {
    setTimeout(() => {
      this.heightDesk = (this.$refs.heightDesk.$children[0].$el.childNodes[1].clientHeight + 50)
      this.heightMob = (this.$refs.heightMob.$children[0].$el.childNodes[1].clientHeight + 50)
    }, 50);
    window.onresize = () => {
      this.heightDesk = (this.$refs.heightDesk.$children[0].$el.childNodes[1].clientHeight + 50)
      this.heightMob = (this.$refs.heightMob.$children[0].$el.childNodes[1].clientHeight + 50)
    }
  },

}
</script>

<style>

.el-carousel__container {
  height: 95%;
}
.el-carousel__arrow--right, .el-carousel__arrow--left {
  background-color: transparent;
  width: 60px;
  height: 60px;
}
.el-carousel__arrow--right i, .el-carousel__arrow--left i {
  font-size: 3rem;
}
.el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.el-button--primary.is-plain {
  background: #ffffff;
}
.custom-accordion .el-collapse-item__arrow {
  display:none;
}
.custom-accardion__arrow {
  transition: transform .3s,-webkit-transform .3s;
}
.custom-accordion .is-active {
  color:  #1A80E6;
}
.custom-accordion .is-active .custom-accardion__arrow {
  transform: rotate(180deg);
}
.custom-accordion .is-active .custom-accardion__arrow path {
  stroke: #1A80E6;
}
  @media (min-width: 1200px) {
    .subheader-img {
      padding: 0 135px;
    }
    .vebinar-img {
      width: 180px;
    }
    .card-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    .el-carousel__container {
      height: 100%;
    }
    .recovery-card {
      max-width: 470px;
      text-align: left;
    }
    .footer-btn-send {
      justify-content: flex-start;
    }
    .footer-btn-send > button {
      width: 25%;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    /* .carousel-mob-tab .el-carousel__container {
      height: 485px;
    } */
    .carousel-card-wrapper {
      padding-top:60px; 
      padding-left: 117px; 
      padding-right: 117px;
    }
    .carousel-card-avatar {
      margin-top: -60px;
      /* padding-left: 32px; */
    }
    .subheader-img {
      padding: 0 24px;
    }
    .vebinar-img {
      width: 160px;
    }
    .recovery-card {
      text-align: center;
    }
    .column-reverse {
      flex-direction: column-reverse;
    }
    .footer-btn-send {
      justify-content: center;
    }
    .footer-btn-send > button {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
    .el-carousel__arrow {
      display: none;
    }
    /* .carousel-mob-tab .el-carousel__container {
      height: 655px;
    } */
    .carousel-card-wrapper {
      padding-top:47px;
    }
    .carousel-card-avatar {
      margin-top: -47px;
      width: 94px;
      padding-left: 16px;
    }
    .vebinar-img {
      width: 68px;
    }
    .recovery-card {
      text-align: center;
    }
    .column-reverse {
      flex-direction: column-reverse;
    }
    .footer-btn-send {
      justify-content: center;
    }
    .footer-btn-send > button {
      width: 100%;
    }
  }
</style>
