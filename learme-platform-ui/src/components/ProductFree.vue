<template>
<div>
  <section style="background: linear-gradient(90deg, #FBC2EB 0%, #A18CD1 100%);">
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
            <div class="h3 text-center">Скачать файл</div>
          <el-row class="text-center pt3 pb1" style="align-items: center;" type="flex">
              <el-col :xs="5" :sm="3" :md="4">
                  <img :src="pdfLogo" alt="" class="pdf-small">
              </el-col>
            <el-col :xs="19" :sm="15" :md="15" style="text-align:left;" class="small-text">
                  <div>Пошаговое руководство «Запуск онлайн-школы».pdf</div>
              </el-col>
            
          </el-row>
          <div class="el-divider el-divider--horizontal mt0"></div>
          <el-row type="flex" justify="center">
              <el-button type="primary">Скачать</el-button>
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
  <section style="background: linear-gradient(90deg, #FBC2EB 0%, #A18CD1 100%);">
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
              <el-button style="background: #DF5D39; border-color: #DF5D39;" class="py2 w-100" type="primary">Скачать</el-button>
          </el-row>
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
    pdfLogo: require('../assets/img/product/pdf-logo.svg')
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
  }
</style>
