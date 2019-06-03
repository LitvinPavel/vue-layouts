<template>
<el-container style="overflow: hidden; flex-direction: column;" >
  <section>
    <el-row class="tabs-btn container pt4 pt-xs-3 pb3 pb-xs-2" type="flex">
      <el-col :xs="24" :sm="16" :md="19">
        <el-radio-group v-model="tabs">
          <el-radio-button label="courses"><span>Курсы</span></el-radio-button>
          <el-radio-button label="vebinars"><span>Вебинары</span></el-radio-button>
          <el-radio-button label="products"><span>Продукты</span></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :xs="24" :sm="8" :md="5" class="pt-xs-2">
        <el-button 
          class="py2"
          style="font-size: 18px;line-height: 18px;letter-spacing: 0.04em;text-transform: uppercase; width: 100%;" 
          type="primary" 
        >
          <div style="display: flex; align-items: center;">
            <img :src="require('../assets/img/icon/plus-circle-fill.svg')" alt="">
            <span class="pl1">Создать курс</span>
          </div>
        </el-button>
      </el-col>
    </el-row>
  </section>
  <section>
    <el-row :gutter="20" class="container" type="flex" style="flex-wrap: wrap;">
      <el-col class="pb3 d-flex" :xs="24" :sm="12" :md="8" v-for="(course, course_id) in courseList" :key="course_id">
        <el-card :body-style="{ padding: '0px', display: 'flex', flexDirection: 'column', height: '100%' }">
          <img :src="course.src" width="100%">
          <div style="flex: 1 0 auto;" class="px2 pt1 pb3" >
            <el-row v-if="course.progress.visible" type="flex">
              <el-col :span="9" style="display: flex; align-items: flex-end;">
                <div class="small-text">Ваш прогресс</div>
              </el-col>
              <el-col :span="15">
                <div class="tiny-text text-gray" style="margin-bottom: -7px;">{{course.progress.activeLesson}} урок из {{course.progress.allLesson}}</div>
                <el-progress :percentage="course.progress.persent"></el-progress>
              </el-col>
            </el-row>
            <div v-if="course.progress.visible" style="margin-left: -16px; margin-right: -16px;">
              <el-divider></el-divider>
            </div>
            <el-row v-if="course.rating.visible" type="flex">
              <el-col :span="15" style="display: flex; align-items: flex-end;">
                <div class="d-flex align-center small-text">Общий рейтинг курса</div>
              </el-col>
              <el-col :span="9" class="d-flex">
                <div class="d-flex align-center">
                  <img :src="require('../assets/img/icon/comment.svg')" alt="">
                  <div class="tiny-text text-gray">{{course.rating.comments}}</div>
                </div>
                <div class="d-flex align-center pl1">
                  <img :src="require('../assets/img/icon/rate.svg')" alt="">
                  <div class="tiny-text text-gray">{{course.rating.stars}}</div>
                </div>
              </el-col>
            </el-row>
            <div v-if="course.rating.visible" style="margin-left: -16px; margin-right: -16px;">
              <el-divider></el-divider>
            </div>
            <el-row type="flex">
              <el-col :span="17" style="display: flex; align-items: center;">
                <div style="letter-spacing: 0.05em;text-transform: uppercase;" class="tiny-text text-gray">Обучающий онлайн курс</div>
              </el-col>
              <el-col :span="7" style="display: flex; align-items: flex-end;">
                <el-button size="mini" style="padding-top: 3px; padding-bottom: 3px;" round :type="course.status.color">{{ course.status.text }}</el-button>
              </el-col>
            </el-row>
            <el-row type="flex" class="pt1">
              <div class="h4 text-black">Практический курс по email-маркетингу</div>
            </el-row>
            <el-row type="flex" class="pt1">
              <div class="tiny-text text-gray">Краткое описание с полезным действием с красивым названием в одну или несколько строк</div>
            </el-row>
          </div>
          <div style="flex: 0 0 auto;" class="px2 pb3">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-dropdown v-if="course.editBtn.type === 'select'" trigger="click" class="mr1"  style="width: 100%;">
                  <el-button :disabled="course.editBtn.disabled" plain>
                    <i class="hidden-xs-only el-icon-arrow-down el-icon--right"></i>
                    <span>{{course.editBtn.title}}</span>
                  </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item disabled>Action 4</el-dropdown-item>
                  <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button v-else :disabled="course.editBtn.disabled" style="width: 100%;" plain>
                {{course.editBtn.title}}
              </el-button>
              </el-col>
              <el-col :span="12">
                <el-button style="width: 100%;" type="primary" plain>Открыть</el-button>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" class="d-flex">
        <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove"
  class="upload">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
      </el-col>
    </el-row>
  </section>
    
  <section>
    <el-footer class="footer" height="auto">
    <div class="text-gray footer-content">
      Размещено на Learme. &copy; Learme 2019, <a class="text-gray" href="">Пользовательское соглашение</a>
    </div>
  </el-footer>
  </section>
  
</el-container>
</template>

<script>

export default {
  data: () => ({
    tabs: 'courses',
    courseList: [
      {
        src: require('../assets/img/account/course-img-1.svg'),
        progress: {
          visible: true,
          persent: 40,
          activeLesson: '4',
          allLesson: '16'
        },
        rating: {
          visible: false
        },
        status: {
          color: 'warning',
          text: 'черновик'
        },
        editBtn: {
          type: 'select',
          title: 'Редактировать',
          disabled: true

        }
      },
      {
        src: require('../assets/img/account/course-img-2.svg'),
        progress: {
          visible: false
        },
        rating: {
          visible: false
        },
        status: {
          color: 'success',
          text: 'пройден'
        },
        editBtn: {
          type: 'btn',
          title: 'Удалить курс',
          disabled: true

        }
      },
      {
        src: require('../assets/img/account/course-img-3.svg'),
        progress: {
          visible: false,
        },
        rating: {
          visible: true,
          comments: '600',
          stars: '4,8'
        },
        status: {
          color: 'success',
          text: 'пройден'
        },
        editBtn: {
          type: 'select',
          title: 'Редактировать',
          disabled: false

        }
      },
      {
        src: require('../assets/img/account/course-img-3.svg'),
        progress: {
          visible: false,
        },
        rating: {
          visible: true,
          comments: '600',
          stars: '4,8'
        },
        status: {
          color: 'success',
          text: 'пройден'
        },
        editBtn: {
          type: 'select',
          title: 'Редактировать',
          disabled: false

        }
      }
    ],
    tariffs: [
      {
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
    ],
    dialogImageUrl: '',
    dialogVisible: false
  }),
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
}
</script>

<style>
.upload {
  width: 100%;
}
.upload div {
  width: 100%;
  height: calc(100% - 24px);
  display: flex;
  align-items: center;
  justify-content: center;
}

  .tabs-btn {
    align-items: center;
  }
  @media (min-width: 1200px) {
    .vebroom-video {
      height: 30vw;
    }
    .el-radio-button__inner {
      padding: 12px 0;
      width: 257px;
    }
    .upload {
      min-height: 572px;
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
    .el-radio-button__inner {
      padding: 12px 0;
      width: 147px;
    }
    .upload {
      min-height: 572px;
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
    .webroom-logo, .webroom-logo2 {
      width: 64px;
    }
    .el-radio-button__inner {
      padding: 12px 0;
      width: 96px;
    }
    .tabs-btn {
      flex-direction: column;
    }
    .upload {
      min-height: 248px;
    }
  }
</style>
