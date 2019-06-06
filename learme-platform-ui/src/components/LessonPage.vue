<template>
  <el-container style="overflow: hidden; flex-direction: column;">
    <section class="pt-md-3 pt-lg-3 pt-xs-2 bg-white">
      <el-row class="container">
        <el-col :span="24">
          <el-row type="flex" class="align-center">
            <el-col :lg="1" :md="1" :sm="2" :xs="4">
              <img
                class="vebinar-img"
                :src="require('../assets/img/vebinar/vebinar-logo.svg')"
                alt="vebinar-logo"
              >
            </el-col>
            <el-col :lg="23" :md="23" :sm="22" :xs="20">
              <div
                class="table-text text-black"
              >Практический курс. Практический курс по хорошему email-маркетингу</div>
            </el-col>
          </el-row>
          <el-row type="flex" class="align-center">
            <el-col :lg="21" :xs="24" class="pt-xs-3 pt-md-4 pt-lg-4">
              <div class="h3 text-gray">Урок 2</div>
              <div class="h1 text-black">Teaching Young Learners a Foreign Second Language</div>
              <div
                class="subtitle text-black pt-lg-2"
              >Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
            </el-col>
          </el-row>
          <div class="divider my-lg-5 mt-md-3 mt-xs-3"></div>
        </el-col>
      </el-row>
    </section>
    <section class="main-index-page bg-white">
      <el-row class="container">
        <el-row class :gutter="20">
          <el-col :md="5" :xs="24">
            <div class="pt-lg-3 lesson-menu-wrapp">
              <div class="h4 text-black headline-menu pl-lg-20">Меню курса</div>
              <SideBarMenu class="pl-lg-20"></SideBarMenu>
              <div class="divider mt1"></div>
              <el-row>
                <el-col :lg="24" :sm="12" :xs="24">
                  <el-menu
                    style="border-right: 0;"
                    background-color="transparent"
                    text-color="#151515"
                    active-text-color="#1A80E6"
                  >
                    <el-menu-item index="1" class="mr-md-2 pl-lg-20">
                      <span class="el-icon-new-progress"></span>
                      <span class="h5">Материалы</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
                <el-col :lg="24" :sm="12" :xs="24">
                  <el-row type="flex" class="progress pb-lg-3 px-lg-3 py1">
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
                <div
                  class="h3 text-black pb1"
                >H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black pb3">
                  <p>Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</p>
                </div>
                <div
                  class="h3 text-black pb1"
                >H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black pb3">
                  <p>Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</p>
                </div>
              </el-col>
              <el-col :lg="20" :xs="24">
                <img :src="require('../assets/img/lesson/big-img.svg')" width="100%" alt>
                <div
                  class="small-text text-gray"
                >Описание для изображения “Практический курс по Email-маркетингу. Все элементы успешной СТРАТЕГИИ”.</div>
              </el-col>
              <el-col :lg="4" :xs="24" class="pl-lg-3">
                <div class="h4 text-black">Фактоид</div>
                <div
                  class="small-text text-black"
                >Small-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Полезная ссылка</div>
              </el-col>
              <el-col :lg="20" :xs="24">
                <div
                  class="h3 text-black pb1 pt3"
                >H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black pb3">
                  <p>Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</p>
                  <p>Выигрывают те из вас, кто начинает чаще выступать – не важно, это тост в кругу семьи или небольшой урок в школе, где учится ваш ребенок. Мы не можем научиться выступать, если не делаем это. В течение многих лет я наблюдаю за своими учениками. Вывод простой – хорошими спикерами становятся те из вас, кто больше работает и учится на своих ошибках. Советую делать упражнения, привлекая друзей, родственников, взрослых детей. Таким образом, вы будете иметь обратную связь от «слушателей», а без этого хорошим спикером стать невозможно.</p>
                  <p>
                    Потому что самое главное – это не сказать, а запомниться!
                    <br>Желаю успеха!
                  </p>
                </div>
                <iframe
                  width="100%"
                  style="height: 30vw;"
                  src="https://www.youtube.com/embed/YJPbOlDXmzQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div
                  class="small-text text-gray"
                >Описание для изображения “Практический курс по Email-маркетингу. Все элементы успешной СТРАТЕГИИ”.</div>
                <div
                  class="h3 text-black pt3 pb1"
                >H3/Длинный заголовок третьего уровня с полезной информацией</div>
                <div class="body-text text-black">
                  <p>Body-400/В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).</p>
                </div>
                <el-divider></el-divider>
                <div class="text-center pt3 pt-xs-2">
                  <el-form :model="review" ref="review" style="max-width: 770px;">
                    <div class="h4 text-black pb2">Пожалуйста оцените урок</div>
                    <el-rate class="rate" v-model="review.rate"></el-rate>
                    <div class="small-text">Вашу оценку и отзыв увидит только автор курса</div>
                    <el-button class="my4 my-xs-3" type="primary">Отметить курс как просмотренный</el-button>
                    <el-form-item prop="text">
                      <el-input
                        type="textarea"
                        placeholder="Напишите ваш отзыв о уроке..."
                        v-model="review.text"
                      ></el-input>
                    </el-form-item>
                    <el-button type="primary" plain>Отправить отзыв</el-button>
                  </el-form>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-row>
    </section>

    <section class="bg-white py3">
      <el-divider></el-divider>
      <el-row type="flex" justify="space-between" class="container">
        <el-col :span="12">
          <div @click="$router.go(-1)" class="d-flex footer-nav-link">
            <i style="font-size: 40px;" class="el-icon-new-arrow_preview"></i>
            <div class="hidden-small mr-xs-1">
              <div class="tiny-text text-gray">Предыдущий</div>
              <div
                class="small-text text-black"
              >Урок 1. Phonics & multisensory literacy teaching. Самые сложные задачи, стоящие перед учителем при обучении Young learners.</div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div
            @click="$router.go(-1)"
            class="d-flex footer-nav-link"
            style="justify-content: flex-end;"
          >
            <div class="hidden-small ml-xs-1">
              <div class="tiny-text text-gray">Следующий</div>
              <div class="small-text text-black">Урок 3/1. Подготовка проекта</div>
            </div>
            <i style="font-size: 40px;" class="el-icon-new-arrow_next"></i>
          </div>
        </el-col>
      </el-row>
    </section>
    <section>
      <el-row class="container py3 my-lg-5">
        <el-row :gutter="20">
          <el-col :md="18" :xs="24">
            <div class="h2 text-black pb2">Комментарии</div>
            <el-row>
              <transition-group name="list">
                <el-col class="py1" v-for="i in commentList" :key="i">
                  <el-card shadow="never">
                    <el-row type="flex">
                      <el-col>
                        <el-row type="flex" class="align-center">
                          <img :src="require('../assets/img/vebinar/spicer.svg')" alt width="60">
                          <div class="pl1">
                            <div class="table-text text-black bold">Мария</div>
                            <div class="tiny-text text-gray">12.08.2019 d 11:00</div>
                          </div>
                        </el-row>
                      </el-col>
                      <el-col class="hidden-xs-only">
                        <div class="d-flex" style="justify-content: flex-end;">
                          <span class="comment-remove" @click="removeComment">Удалить</span>
                          <span class="comment-reply ml2">Ответить</span>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row class="mt2">
                      <div class="table-text text-gray">????</div>
                    </el-row>
                    <el-row type="flex" class="mt2 justify-space-between hidden-sm-and-up">
                      <span class="text-gray" @click="removeComment">Удалить</span>
                      <span class="text-black">Ответить</span>
                    </el-row>
                  </el-card>
                </el-col>
              </transition-group>
            </el-row>
            <el-row class="pt2">
              <div class="d-flex align-center body-text pl1" style="color: #668099;">
                <span class="el-icon-new-comments"></span>
                <span class="pl1">Оставить комментарий</span>
              </div>
              <el-form class="pt1" :model="comment" ref="comment">
                <el-form-item prop="text">
                  <el-input
                    type="textarea"
                    placeholder="Напишите комментарий..."
                    v-model="comment.text"
                  ></el-input>
                </el-form-item>
                <el-button type="primary" plain @click="addComment">Отправить</el-button>
              </el-form>
            </el-row>
          </el-col>
          <el-col :md="6" :xs="24">
            <div class="h4 text-black pb3 mt2">Анонсы</div>
            <el-card
              :body-style="{ padding: '0px' }"
              v-for="(announce, announce_id) in announces"
              :key="announce_id+'announce'"
              class="mb2 announce-wrapp"
            >
              <div
                class="announce-img"
                :style="{background: `url(${announce.src})`, backgroundSize: 'cover', backgroundPosition: 'center'}"
              ></div>
              <div style="padding: 14px;">
                <div
                  class="small-text text-gray pb1"
                  style="text-transform: uppercase;letter-spacing: 0.1em;"
                >{{ announce.category }}</div>
                <div class="table-text text-black bold pb1">{{ announce.title }}</div>
                <div class="d-flex align-center text-link tiny-text">
                  <img class="pr1" v-if="announce.link.img" :src="announce.link.img" alt>
                  <span>{{ announce.link.text }}</span>
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
          Размещено на Learme. &copy; Learme 2019,
          <a class="text-gray" href>Пользовательское соглашение</a>
        </div>
      </el-footer>
    </section>
  </el-container>
</template>

<script>
import SideBarMenu from "./SideBarMenu";
export default {
  components: { SideBarMenu },
  data: () => ({
    commentList: 3,
    comment: {
      text: ""
    },
    review: {
      text: "",
      rate: null
    },
    announces: [
      {
        src: require("../assets/img/account/course-img-1.svg"),
        category: "Вебинар",
        title: "Как рассылка влияет на показатели бизнеса",
        link: {
          img: require("../assets/img/time-icon.svg"),
          text: "26 мая 2018 в 16:00 по МСК"
        }
      }
    ]
  }),
  methods: {
    addComment() {
      this.commentList++;
    },
    removeComment() {
      this.commentList--;
    }
  }
};
</script>

<style>
.pl-lg-20 {
  padding-left: 20px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.comment-remove:hover {
  color: #df5d39;
  cursor: pointer;
}
.footer-nav-link:hover > i,
.footer-nav-link:hover > div div,
.comment-reply:hover {
  color: #1a80e6 !important;
  cursor: pointer;
}
.vebinar-img {
  width: 40px;
}
.progress {
  flex-direction: column;
}
.rate {
  height: 50px;
}
.rate i {
  font-size: 50px;
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
  background: #f1f7fd;
}
@media (max-width: 992px) {
  .pl-lg-20 {
    padding-left: 0 !important;
  }
  .progress {
    flex-direction: row;
  }
  .column-reverse {
    display: flex;
    flex-direction: column;
  }
  .column-reverse > div:nth-of-type(1) {
    order: 1;
  }
  .column-reverse > div:nth-of-type(2) {
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
  .hidden-small {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .m_btn {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top: 8px;
  }
  .vebinar-img {
    width: 32px;
  }
  .rate {
    height: 30px;
  }
  .rate i {
    font-size: 30px;
  }
}
</style>
