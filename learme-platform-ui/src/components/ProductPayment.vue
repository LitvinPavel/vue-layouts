<template>
<div>
  <section style="background: linear-gradient(90deg, #7FFED8 0%, #09D2FE 100%);">
    <el-row class="container">
      <el-col :lg="14" :md="12" :xs="24">
        <el-row>
          <el-col :lg="24" :md="24" :sm="6" :xs="7" class="mb-md-3 mb-lg-3">
            <img class="product-img" :src="pdfLogo" alt="product-logo" width="180">
          </el-col>
          <el-col :lg="24" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
            <div class="h4">Пошаговое руководство</div>
            <div class="h2 text-black hidden-xs-only mt2">Запуск онлайн-школы</div>
            <div class="body-text text-black hidden-sm-and-down">
                PDF-книга. 100 страниц.<br>50 схем, 200 полезных ресурсов<br>и ТОП-10 типичных ошибок при создании онлайн-школы
            </div>
          </el-col>
        </el-row>
        <div class="h2 text-black hidden-sm-and-up py1">Запуск онлайн-школы</div>
        <div class="body-text text-black hidden-md-and-up mb3">
            PDF-книга. 100 страниц.<br>50 схем, 200 полезных ресурсов<br>и ТОП-10 типичных ошибок при создании онлайн-школы
        </div>
      </el-col>
      <el-col :lg="10" :md="12" :xs="24" class="card-wrapper">
        <el-card class="recovery-card">
          <div style="display: flex; justify-content: center; flex-direction: column;">
            <div class="h3 text-center">Купить</div>
          <el-row class="text-center pt3 pb1" style="align-items: center;" type="flex">
              <el-col :xs="5" :sm="3" :md="4">
                  <img :src="pdfLogo" alt="" class="pdf-small">
              </el-col>
            <el-col :xs="12" :sm="15" :md="14" style="text-align:left;" class="small-text">
                  <div>Пошаговое руководство «Запуск онлайн-школы».pdf</div>
              </el-col>
            <el-col :xs="7" :sm="6" :md="6" style="text-align:right;" class="small-text">
                  <div class="tiny-text">Стоимость</div>
                  <div class="h4 text-black">13 999 ₽</div>
              </el-col>
          </el-row>
          <div class="el-divider el-divider--horizontal mt0"></div>
          <el-row type="flex" justify="center" class="footer-btn-send">
              <el-button type="primary">Оплатить</el-button>
          </el-row>
          
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
  <section class="bg-white">
    <el-row class="container column-reverse" type="flex">
      <el-col>
        <el-row>
          <el-col :sm="20" :md="16" class="">
            <div class="h3 text-black">Рассказ о вебинаре с красивым названием</div>
            <div class="body-text py2 text-black">
              В этой рабочей тетради каждый из вас найдет краткое изложение всех двадцати моих уроков плюс задания по каждому уроку. Хочу сказать, что навык успешных публичных выступлений не может прийти сам по себе. Те люди, которые делают упражнения и готовятся к выступлениям согласно полученным советам, всегда окажутся впереди тех, кто прослушал курс ради «фана» (знаю, такие тоже есть).
            </div>

          </el-col>
        </el-row>
      </el-col>
      
    </el-row>
  </section>
  <section style="background: linear-gradient(90deg, #7FFED8 0%, #09D2FE 100%);">
    <el-row class="container md-flex" style="align-items: center;">
      <el-col :md="16">
        <el-row>            
          <el-col :lg="6" :md="24" :sm="6" :xs="7" class="mb-md-3">
            <img class="product-img" :src="pdfLogo" alt="product-logo" width="90">
          </el-col>
          <el-col :lg="18" :md="24" :sm="18" :xs="17" class="mb-md-3 text-black">
            <div class="h4">Пошаговое руководство</div>
            <div class="h2 text-black hidden-xs-only mt2">Запуск онлайн-школы</div>
          </el-col>
        </el-row>
        <div class="h2 text-black hidden-sm-and-up py1">Запуск онлайн-школы</div>
      </el-col>
      <el-col :md="8">
          <el-row type="flex" class="footer-btn-send">
              <el-button style="background: #DF5D39; border-color: #DF5D39;" class="py2 w-100" type="primary">Оплатить 13 999 ₽</el-button>
          </el-row>
      </el-col>
    </el-row>
    <el-row class="container" style="padding-top: 0;">
        <el-col :sm="12" :xs="24"> 
          <img v-for="item in pay" :key="item" :src="item" alt="item" class="pr1 pay-imgs" width="32">
        </el-col>
        <el-col :sm="12" :xs="24" class="pay-question">
          <div class="small-text text-link">Как проходить курс после покупки?</div>
        </el-col>
        <el-col :span="24" class="mt2">
            <div :class="[textVision ? 'text-vision' : 'text-pay', 'text-black', 'tiny-text']">Продавцом настоящего обучающего продукта является ИП ЯВЕРБАУМ О.В. (ОГРН 317774600214447, ИНН 770201025129), адрес: Большой Сергиевский пер. 11-10. В соответствии с законодательством Российской Федерации и защите прав потребителей Продавец гарантирует, что обучающий продукт при обычных условиях его использования не создаст угрозу для жизни, здоровья и имущества Покупателя-потребителя. Продавец гарантирует, что Покупателю предоставлена полная и достоверная информация о свойствах и качествах обучающего продукта. Продавец гарантирует Покупателю право вернуть обучающий продукт/прекратить использование обучающего продукта и получить назад уплаченную покупную цену в полном объеме в случае, если обучающий продукт: 1. Не соответствует заявленным Продавцом описаниям его свойств, качеств, результативности вообще, скорости получения результата и качеству результата, описаниям иных потребительских свойств; 2. Не может быть использован Покупателем в связи с неприемлемой для Покупателя манерой подачи материала. Право на возврат может быть реализовано Покупателем в течение 15 (пятнадцати) календарных дней с момента получения доступа к обучающему продукту. Порядок возврата урегулирован в Пользовательском соглашении. Также Продавец гарантирует, что ему принадлежит право на коммерческое использование обучающего продукта и всех (любых) его составных частей, достаточное для размещения и продажи обучающего продукта на настоящем сайте. Покупателю не могут быть предъявлены претензии со стороны третьих лиц в связи с незаконным использованием обучающего продукта. По всем вопросам к Продавцу Покупатель может обратить по телефону (916) 191-64-95 и адресу электронной почты letterlandrussia@mail.ru. Обращения Покупателей обрабатываются в рабочие дни с 9.00 до 18.00 по местному времени Продавца.
            </div>
            <el-button class="hidden-sm-and-up" type="primary" size="mini" plain @click="textVision = !textVision" v-text="textVision ? 'Скрыть' : 'Читать полностью'"></el-button>
        </el-col>
    </el-row>
    <el-footer class="footer" height="auto">
    <div class="text-white footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="text-white" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</div>
</template>

<script>
export default {
  data: () => ({
    pdfLogo: require('../assets/img/product/pdf-logo.svg'),
    pay: {
        visa: require('../assets/img/payment-icon/visa.svg'),
        maestro: require('../assets/img/payment-icon/maestro.svg'),
        master: require('../assets/img/payment-icon/mastercard.svg'),
        mir: require('../assets/img/payment-icon/mir.svg'),
        google: require('../assets/img/payment-icon/google.svg'),
        apple: require('../assets/img/payment-icon/apple.svg'),
        fz: require('../assets/img/payment-icon/54fz.svg'),
        yandex: require('../assets/img/payment-icon/yandex.svg'),
    },
    textVision: false
  })
}
</script>

<style>
  @media (min-width: 1200px) {
    .pdf-small {
        width: 50px;
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
    .footer-btn-send > button {
      width: 100%;
    }
    .md-flex {
        display: flex;
    }
    .text-pay {
        text-align: justify;
    }
    .pay-question {
        text-align: right;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    .product-img {
      width: 160px;
    }
    .pdf-small {
        width: 50px;
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
    .text-pay {
        text-align: justify;
    }
    .pay-question {
        text-align: right;
    }
  }
  @media (max-width: 767px) {
    .product-img {
      width: 68px;
    }
    .pdf-small {
        width: 32px;
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
    .text-pay {
        text-align: justify;
        -webkit-mask-image: -webkit-linear-gradient(270deg, #000000 51.4%, rgba(0, 0, 0, 0) 100%);
        height: 131px;
        overflow: hidden;
    }
    .text-vision {
        text-align: justify;
        height: auto !important;
    }
    .pay-question {
        text-align: left;
    }
    .pay-imgs {
        width: 24px;
    }
  }
</style>
