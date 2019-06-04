<template>
<div class="pt-md-3 pt-lg-3">
    <el-menu
      default-active="2"
      :mode="windowWidth < 992 ? 'horizontal' : 'vertical'"
      background-color="transparent"
            text-color="#151515"
      active-text-color="#1A80E6"
      class="menu-hidden side-bar-menu">
      <el-menu-item v-for="(item, item_id) in menu" :key="item_id"  :index="`${item_id}`">
        <span class="el-icon-new-add_circle_fill"></span>
        <span class="h5">{{item}}</span>
      </el-menu-item>
      
    </el-menu>
</div>
</template>

<script>

export default {
    data: () => ({
      menu: [
        'Общая информация', 'Структура и контент', 'Проверка заданий', 'Страница курса',
        'Прием платежей', 'Продвижение', 'Сертификат', 'Статистика',
      ],
      windowWidth: window.innerWidth
    }),
    mounted() {
      window.onresize = () => {
        this.windowWidth = window.innerWidth
      }
    },
}
</script>

<style>
    .side-bar-menu .el-menu-item:hover {
        background: transparent !important;
        color: #616161 !important;
    }
    .side-bar-menu .el-menu-item {
      height: 40px !important;
      line-height: 40px !important;
    }
    .side-bar-menu.el-menu--horizontal>.el-menu-item {
      width: auto;
      padding: 0 5px;
    }
    .side-bar-menu {
        border-right: 0;
    }
  @media (max-width: 992px) {
    .menu-hidden {
      -webkit-mask-image: -webkit-linear-gradient(0deg, #000000 51.4%, rgba(0, 0, 0, 0) 100%);
      width: 100vw;
      height: 40px;
      display: flex;
      overflow-x: auto;
    }
  }
</style>
