<template>
<el-container>
  <transition name="slide-fade">
                <el-aside class="mobile-menu"  v-show="showMenu" >
                  <div style="width: 100%; height: 100%;"  @click.self="showMenu = !showMenu">
                      <el-menu 
      default-active="2"
      class="el-menu-vertical-demo" style="width: 80%; right: 0; position: absolute; bottom: 0; top: 0;">
      <el-menu-item @click.self="showMenu = !showMenu">
        <img :src="require('../assets/img/main-menu/learn.svg')" alt="">
        <span class="small-text pl1">Курсы</span>
      </el-menu-item>
      <el-menu-item index="1">
        <img :src="require('../assets/img/main-menu/play_circle_outline.svg')" alt="">
        <span class="small-text pl1">Вебинары</span>
      </el-menu-item>
      <el-menu-item index="2">
        <img :src="require('../assets/img/main-menu/star.svg')" alt="">
        <span class="small-text pl1">Продукты</span>
      </el-menu-item>
      <el-menu-item index="3">
        <img :src="require('../assets/img/main-menu/people.svg')" alt="">
        <span class="small-text pl1">Ученики</span>
      </el-menu-item>
      <el-menu-item index="4">
        <img :src="require('../assets/img/main-menu/money.svg')" alt="">
        <span class="small-text pl1">Финансы</span>
      </el-menu-item>
      <el-menu-item index="4">
        <img :src="require('../assets/img/main-menu/settings.svg')" alt="">
        <span class="small-text pl1">Настройки</span>
      </el-menu-item>
      <el-menu-item index="4">
        <img :src="require('../assets/img/main-menu/help.svg')" alt="">
        <span class="small-text pl1">Помощь</span>
      </el-menu-item>
    </el-menu>
                   </div>
                </el-aside>
            </transition>
            <el-container style="flex-direction: column;">
    <Header  @isMenu="toggleMenu"></Header>
                <router-view></router-view>
  </el-container>
    
</el-container>


</template>

<script>
import Header from '../components/HeaderAuthor'
  export default {
    components: { Header },
    data: () => ({
        showMenu: false,
    }),
    methods: {
        toggleMenu(val) {
            this.showMenu = val
        }
    }
  }
</script>

<style>
.mobile-menu {
  position:absolute; 
  right: 0;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  background: rgba(0,0,0,0.4);
}
.slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateX(200px);
    }
  @media (min-width: 320px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
    
  }
  @media (min-width: 768px) {
    .container {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-left: 135px;
      padding-right: 135px;
    }
  }
</style>
