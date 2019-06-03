<template>
  <div>
    <section style="background: linear-gradient(90deg, #C2E9FB 0%, #A1C4FD 100%);">
      <el-row class="container">
        <el-col :lg="14" :md="12" :xs="24">
          <el-row>
            <el-col :lg="24" :md="24" :sm="6" :xs="7" class="mb-md-3">
              <img class="vebinar-img" :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="vebinar-logo">
            </el-col>
            <el-col :lg="24" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
              <div class="h4">17 апреля 2019, ср в 18:30 по Москве</div>
              <div class="h5">начало через 3 дня</div>
              <div class="h2 text-black hidden-xs-only">Вебинар с красивым названием</div>
              <div class="body-text text-black hidden-sm-and-down">Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
            </el-col>
          </el-row>
          <div class="h2 text-black hidden-sm-and-up py1">Вебинар с красивым названием</div>
          <div class="body-text text-black hidden-md-and-up mb3">Краткое описание с полезным действием вебинара с красивым названием в одну или несколько строк</div>
        </el-col>
        <el-col :lg="10" :md="12" :xs="24" class="card-wrapper">
          <el-card class="recovery-card">
            <div class="d-flex justify-center flex-column">
              <img class="py2" :src="require('../assets/img/vebinar/lock.svg')" alt="lock">
              <div class="h3 text-center">Регистрация на вебинар</div>
              <div class="pre-message text-center py3">
                Вебинар защищен. Получите пароль у организатора, чтобы посетить вебинар.
              </div>
              <el-row type="flex" justify="center">
                <el-button type="primary">Зарегистрироваться</el-button>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="bg-white">
      <el-row class="container column-reverse" type="flex">
        <el-col :lg="14" :md="12" :xs="24">
          <el-row>
            <el-col :sm="20" class="pt-xs-5 pt-md-5 pt-lg-0">
              <div class="h3 text-black">Рассказ о вебинаре с красивым названием</div>
              <div class="body-text py2 text-black">
                В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к
                выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).
                <br><br> Выигрывают те из вас, кто начинает чаще выступать – не важно, это тост в кругу семьи или небольшой урок в школе, где учится ваш ребенок. Мы не можем научиться выступать, если не делаем это. В течение многих лет я наблюдаю за своими
                учениками.
                <br><br> Вывод простой – хорошими спикерами становятся те из вас, кто больше работает и учится на своих ошибках. Советую делать упражнения, привлекая друзей, родственников, взрослых детей.
                <br><br> Таким образом, вы будете иметь обратную связь от «слушателей», а без этого хорошим спикером стать невозможно. Потому что самое главное – это не сказать, а запомниться!
                <br><br> Желаю успеха!
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="10" :md="12" :xs="24">
          <el-row :gutter="20">
            <el-col :sm="12" :lg="24" class="card-wrapper">
              <el-card class="recovery-card" shadow="never">
                <el-row>
                  <el-col :lg="6" :xs="24">
                    <img :src="require('../assets/img/vebinar/spicer.svg')" alt="" width="104">
                  </el-col>
                  <el-col :lg="18" :xs="24" class="pl-lg-2">
                    <div class="small-text">Ведущий вебинара</div>
                    <div class="h5">Константин Константинопольский</div>
                    <div class="small-text">Публичные выступления на популярных конфиренциях TED и других</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col :sm="12" :lg="24" class="pt-xs-3 pt-lg-3 card-wrapper">
              <el-card class="recovery-card" shadow="never">
                <el-row>
                  <el-col :lg="6" :xs="24">
                    <img :src="require('../assets/img/vebinar/spicer.svg')" alt="" width="104">
                  </el-col>
                  <el-col :lg="18" :xs="24" class="pl-lg-2">
                    <div class="small-text">Ведущий вебинара</div>
                    <div class="h5">Константин Константинопольский</div>
                    <div class="small-text">Публичные выступления на популярных конфиренциях TED и других</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
            <el-col class="pt3 card-wrapper">
              <el-card class="recovery-card" shadow="never">
                <el-row>
                  <el-col :lg="6" :xs="24">
                    <img :src="require('../assets/img/vebinar/spicer.svg')" alt="" width="104">
                  </el-col>
                  <el-col :lg="18" :xs="24" class="pl-lg-2">
                    <div class="small-text">Ведущий вебинара</div>
                    <div class="h5">Константин Константинопольский</div>
                    <div class="small-text">Публичные выступления на популярных конфиренциях TED и других</div>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </section>
    <section style="background: linear-gradient(90deg, #C2E9FB 0%, #A1C4FD 100%);">
      <el-row class="container">
        <el-col>
          <el-row>
            <el-col :lg="24" :md="24" :sm="6" :xs="7" class="mb-md-3">
              <img class="vebinar-img" :src="require('../assets/img/vebinar/vebinar-logo.svg')" alt="vebinar-logo">
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
            <el-button class="py2" type="primary">Зарегистрироваться</el-button>
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

<style>
  @media (min-width: 1200px) {
    .vebinar-img {
      width: 180px;
    }
    .card-wrapper {
      display: flex;
      justify-content: flex-end;
    }
    .recovery-card {
      max-width: 470px;
      text-align: left;
    }
    .footer-btn-send {
      justify-content: flex-start;
    }
    .footer-btn-send>button {
      width: 25%;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
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
    .footer-btn-send>button {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
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
    .footer-btn-send>button {
      width: 100%;
    }
  }
</style>
