<template>
  <el-row class="container">
      <el-col :sm="12" :xs="24">
        <img v-for="item in pay" :key="item" :src="item" alt="item" class="pr1 pay-imgs" width="32">
      </el-col>
      <el-col :sm="12" :xs="24" class="pay-question">
        <div class="small-text text-link">Как проходить курс после покупки?</div>
      </el-col>
      <el-col :span="24" class="mt2">
        <div :class="[textVision ? 'text-vision' : 'text-pay', 'text-black', 'tiny-text']">Продавцом настоящего обучающего продукта является ИП ЯВЕРБАУМ О.В. (ОГРН 317774600214447, ИНН 770201025129), адрес: Большой Сергиевский пер. 11-10. В соответствии с законодательством Российской Федерации и защите прав потребителей Продавец гарантирует,
          что обучающий продукт при обычных условиях его использования не создаст угрозу для жизни, здоровья и имущества Покупателя-потребителя. Продавец гарантирует, что Покупателю предоставлена полная и достоверная информация о свойствах и качествах обучающего
          продукта. Продавец гарантирует Покупателю право вернуть обучающий продукт/прекратить использование обучающего продукта и получить назад уплаченную покупную цену в полном объеме в случае, если обучающий продукт: 1. Не соответствует заявленным Продавцом
          описаниям его свойств, качеств, результативности вообще, скорости получения результата и качеству результата, описаниям иных потребительских свойств; 2. Не может быть использован Покупателем в связи с неприемлемой для Покупателя манерой подачи
          материала. Право на возврат может быть реализовано Покупателем в течение 15 (пятнадцати) календарных дней с момента получения доступа к обучающему продукту. Порядок возврата урегулирован в Пользовательском соглашении. Также Продавец гарантирует,
          что ему принадлежит право на коммерческое использование обучающего продукта и всех (любых) его составных частей, достаточное для размещения и продажи обучающего продукта на настоящем сайте. Покупателю не могут быть предъявлены претензии со стороны
          третьих лиц в связи с незаконным использованием обучающего продукта. По всем вопросам к Продавцу Покупатель может обратить по телефону (916) 191-64-95 и адресу электронной почты letterlandrussia@mail.ru. Обращения Покупателей обрабатываются в
          рабочие дни с 9.00 до 18.00 по местному времени Продавца.
        </div>
        <el-button class="hidden-sm-and-up" type="primary" size="mini" plain @click="textVision = !textVision" v-text="textVision ? 'Скрыть' : 'Читать полностью'"></el-button>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    data: () => ({
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
    }),
  }
</script>

<style>
  @media (min-width: 1200px) {
    .text-pay {
      text-align: justify;
    }
    .pay-question {
      text-align: right;
    }
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    .text-pay {
      text-align: justify;
    }
    .pay-question {
      text-align: right;
    }
  }
  @media (max-width: 767px) {
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