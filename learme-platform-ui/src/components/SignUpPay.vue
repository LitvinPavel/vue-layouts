<template>
      <div>
          <el-row class="main-row">
        <div class="m-auto">
          <el-card class="signup-card">
          <div class="h3 text-center mb3">Оплата курса</div>
          <el-row class="text-center pt3 pb1 mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1" style="align-items: center;" type="flex">
              <el-col :xs="5" :sm="3" :md="4" style="text-align:left;">
                  <img :src="enCourse" alt="" class="en-course-img">
              </el-col>
            <el-col :xs="12" :sm="15" :md="14" style="text-align:left;" class="small-text">
                  <div>«Teaching English to Young Learners as a Foreign Language with Letterland»</div>
              </el-col>
            <el-col :xs="7" :sm="6" :md="6" style="text-align:right;" class="small-text">
                  <div class="tiny-text">Стоимость</div>
                  <div class="h4 text-black">19 999 ₽</div>
              </el-col>
              
          </el-row>
          <el-row class="mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1">
                  <div class="el-divider el-divider--horizontal mt0"></div>
              </el-row>
          <div class="small-text text-center mx-xs-3 mx-md-4 mx-lg-4 px-md-1 px-lg-1">Чтобы перейти к оплате, пожалуйста заполните форму ниже или <a class="link" href="">авторизуйтесь</a> если у вас уже есть аккаунт в нашей системе.
          </div>
          <el-form class="signup-form" :model="signup" ref="signup">
            <el-form-item>
              <el-input placeholder="Имя" v-model="signup.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Электронная почта" type="email" v-model="signup.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Номер телефона, 10 цифр" v-model="signup.phone" class="input-with-select">
                <el-select size="mini" v-model="signup.select" slot="prepend" placeholder="+375">
                  <el-option label="+375" value="1"></el-option>
                  <el-option label="+7" value="2"></el-option>
                  <el-option label="+123" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-row style="display: flex;" class="text-left pb2">
              <el-checkbox style="margin-right: 0; line-height: 21px;"></el-checkbox>
              <div style="font-size: 14px; line-height: 21px; padding-left: 8px;">Принимаю пользовательское соглашение</div>
            </el-row>
            <el-form-item >
              <el-row class="line-height-21">
                <el-col :span="24" >
                  <el-button class="w-xs-100" type="primary" @click="submit">Перейти к оплате</el-button>
                </el-col>
                <el-col :span="24">
                  <div class="tiny-text pt1">Данные для доступа к курсу придут на вашу электронную почту сразу посе оплаты.</div>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
          
          
        </el-card>
        </div>

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
      </div>
</template>

<script>
export default {
  data: () => ({
    vkIcon: require('../assets/img/social/vk.svg'),
    fbIcon: require('../assets/img/social/fb.svg'),
    gooIcon: require('../assets/img/social/google.svg'),
    enCourse: require('../assets/img/english-course.svg'),
    signup: {
      name: '',
      email: '',
      phone: '',
      select: ''
    },
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
  methods: {
    submit() {

    }
  }
}
</script>

<style>
.signup-card {
  max-width: 570px;
  padding: 0;
  position: relative;
}
.signup-card > .el-card__body {
  padding: 20px 0 0 0 !important;
}
.signup-btn {
  width: 177px;
  height: 50px;
  font-size: 18px;
  line-height: 18px;
}
.signup-form {
  padding: 0 40px;
  text-align: center;
}
.h1 {
  padding: 20px 40px 0 40px;
  margin-bottom: 16px;
}
.social-content {
  padding: 20px 40px; 
  display: flex; 
  align-items: center;
}
.pre-message {
  padding: 0 40px 32px 16px;
}
.el-select .el-input {
    width: 88px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }


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
      .social-content {
    flex-direction: column;
    padding: 5px 20px;
  }
  .signup-form {
    padding: 0 23px;
  }
  .signup-btn {
    width: 136px;
    height: 39px;
    font-size: 16px;
    line-height: 16px;
  }

  .pre-message {
    padding: 0 24px 32px 24px;
    font-size: 12px;
    line-height: 18px;
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
    .en-course-img {
        width: 32px;
    }
  }
</style>
