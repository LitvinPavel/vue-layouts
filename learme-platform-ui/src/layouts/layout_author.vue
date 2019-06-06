<template>
  <el-container>
    <transition name="slide-fade">
      <el-aside class="mobile-menu" v-show="showMenu">
        <img @click.self="showMenu = !showMenu" style="position: absolute; right: 13px; top: 13px; z-index: 1;" :src="require('../assets/img/icon/close.svg')">
        <el-menu 
          default-active="2" 
          class="el-menu-vertical-demo" 
          style="width: 100%; right: 0; min-height: 100%; position: absolute; top: 0;"
        >
          <el-row class="px2 pt2">
            <el-row type="flex">
              <img :src="require('../assets/img/main-menu/kostya.svg')" alt="">
              <div class="pl1 d-inline-flex flex-column">
                <span class="tiny-text text-black bold">Константин Победкин</span>
                <span style="font-size: 10px;line-height: 10px;" class="text-gray">Баланс 14 000 ₽</span>
              </div>
            </el-row>
            <el-divider></el-divider>
            <div class="small-text pb2">Профиль</div>
            <div class="small-text pb2">Настройки</div>
            <div class="d-flex align-center justify-space-between pb2">
              <span class="small-text">Уведомления</span>
              <el-tag style="border-radius: 50%; padding: 0 12px;"
                effect="plain">
                3
              </el-tag>
            </div>
            <div class="small-text">Выход</div>
            <el-divider></el-divider>
          </el-row>
          <template v-if="windowSize < 768">
            <el-menu-item >
            <img :src="require('../assets/img/main-menu/learn.svg')" alt="">
            <span style="color: #668099;" class="small-text pl1">Курсы</span>
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
          </template>
        </el-menu>
      </el-aside>
    </transition>
    <el-container style="flex-direction: column">
      <transition name="fade">
        <div 
          v-if="showMenu"
          @click.self="showMenu = !showMenu"
          style="position: fixed; top: 0; height: 100%; left: 0; right: 0; background: rgba(21,21,21,.5); z-index: 2;"
        ></div>
      </transition>
      <Header @isMenu="toggleMenu"></Header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
  import Header from '../components/HeaderAuthor'
  export default {
    components: {
      Header
    },
    data: () => ({
      showMenu: false,
      windowSize: 0
    }),
    methods: {
      toggleMenu(val) {
        this.showMenu = val.show
        this.windowSize = val.width
      }
    }
  }
</script>

<style>
  .mobile-menu {
    position: fixed;
    right: 0;
    min-height: 100%;
    z-index: 9999;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(300px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  @media (min-width: 320px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-left: 135px;
      padding-right: 135px;
    }
  }
</style>
