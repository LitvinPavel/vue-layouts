<template>
<el-container style="overflow: hidden; flex-direction: column;" >
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
        <div @click="$router.go(-1)" class="hidden-sm-and-down">
          <i class="el-icon-arrow-left"></i>
          <span class="small-text text-gray">Назад к моим курсам</span>
        </div>
      </el-row>
  </section>
  <section class="main-index-page">
    <el-row class="container">
        <el-row :gutter="20">
            <el-col :md="6" :xs="24">
                <div class="h4 text-black pt5 mt3 pl3 headline-menu">Редактировать</div>
                <EditMenu></EditMenu>
            </el-col>
        <el-col :md="18" :xs="24">
            <div class="h2 text-black pb3">Настройки курса</div>
            <div style="width: 100%; height: 670px; background: #fff;"></div>
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
import EditMenu from './EditSideMenu'
export default {
  components: { EditMenu }
}
</script>

<style>
.vebinar-img {
  width: 170px;
}
  .main-index-page {
      padding-top: 24px;
  }
  @media (max-width: 992px) {
    .vebinar-img {
      width: 162px;
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
  }
</style>
