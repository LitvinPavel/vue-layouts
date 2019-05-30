<template>
<el-header class="bg-white header divider-bottom" height="70" style=" z-index:1; flex-direction: row; display: flex; align-items: center; justify-content: space-between;">
  <el-col :sm="1" :xs="3" style="display:flex;align-items: center;">
    <img :src="require('../assets/logo.svg')" alt="">
  </el-col>
  <el-col :xs="16" :sm="20">
    <el-row type="flex" class="hidden-sm-and-up">
      <span class="bold">Константин</span>
    </el-row>
      <el-menu class="hidden-xs-only" :default-active="activeIndex" active-text-color="#1A80E6" mode="horizontal" @select="handleSelect" style="height: 70px; justify-content: center; display: flex;">
    <el-menu-item style="display:flex;align-items: center; height: 70px;" index="1">
    <el-row type="flex" style="flex-direction: column;">
      <img :src="require('../assets/img/main-menu/learn.svg')" alt="">
      <span class="small-text" style="line-height: 1;">Курсы</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="2">
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/play_circle_outline.svg')" alt="">
    <span style="line-height: 1;">Вебинары</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="3" >
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/star.svg')" alt="">
    <span style="line-height: 1;">Продукты</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="4">
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/people.svg')" alt="">
    <span style="line-height: 1;">Ученики</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="5">
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/money.svg')" alt="">
    <span style="line-height: 1;">Финансы</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="6">
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/settings.svg')" alt="">
    <span style="line-height: 1;">Настройки</span>
    </el-row>
  </el-menu-item>
  <el-menu-item style="display:flex;align-items: center; height: 70px;" index="7">
    <el-row type="flex" style="flex-direction: column;">
    <img :src="require('../assets/img/main-menu/help.svg')" alt="">
    <span style="line-height: 1;">Помощь</span>
    </el-row>
  </el-menu-item>
</el-menu>
  </el-col>
<el-col  :xs="7" :sm="3" class="px1 user-setting" style="">
  <span class="hidden-sm-and-up el-dropdown-link" style="display: inline-flex; align-items:center;vertical-align: middle;">
    <el-badge value="!" style="display: inline-flex;" class="px1">
      <img class="pl1" :src="require('../assets/img/main-menu/kostya.svg')" alt="">
    </el-badge>
    <img @click="show = !show" class="hidden-sm-and-up" :src="require('../assets/img/main-menu/burger.svg')" alt="">
  </span>
  <el-dropdown class="hidden-xs-only" trigger="click">
    
      <span class="el-dropdown-link" style="display: inline-flex; align-items:center;vertical-align: middle;">
        
        <el-badge value="!" style="display: inline-flex;" class="px1">
  <img class="pl1" :src="require('../assets/img/main-menu/kostya.svg')" alt="">
</el-badge>
        <span class="hidden-sm-and-down pl1">Константин</span>
        <i class="hidden-xs-only el-icon-arrow-down el-icon--right"></i>
        <img @click="show = !show" class="hidden-sm-and-up" :src="require('../assets/img/main-menu/burger.svg')" alt="">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check-outline">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
</el-col>
<transition name="slide-fade">
  <div v-show="show" style="position: fixed;height: 100%; left: 0; top: 50px; width: 100%; background: #ffffff; z-index:999;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
      <el-menu-item >
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
</transition>
</el-header>
</template>

<script>
  export default {
    data: () => ({
      activeIndex: '1',
      show: false,
    }),
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.header {
  height: 70px;
  overflow: hidden;
}
.user-setting {
  line-height: 70px;
  height: 70px;
  display: flex;
  border-left: 1px solid #E0E0E0;
}
.el-menu--horizontal>.el-menu-item {
  height: 70px;
  line-height: 70px;
  width: 80px;
  color: #668099;
  padding: 0;
  justify-content: center;
  border: 0;
}
.el-menu--horizontal>.el-menu-item.is-active {
  background: #F1F7FD;
  color: #1A80E6;
  border: 0;
} 
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #F1F7FD;
}
.el-badge__content.is-fixed {
  top: 6px;
  right: 17px;
}
.el-badge__content {
  padding: 0 4px;
  border: 0;
  height: 11px;
  line-height: 11px;
  border-radius: 50%;
}
@media (min-width: 768px) and (max-width: 1199px) {
  .user-setting {
    border-left: 0;
  }
}
@media (max-width: 767px) {
  .header {
    height: 50px;
  }
  .user-setting {
    border-left: 0;
  }
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  margin-right: -100%;
}
</style>
