<template>
    <el-row class="header-wrapper" type="flex" justify="space-between">
      <img  :src="logo" alt="logo">
      <el-button v-if="$route.path !== '/'" type="primary" icon="el-icon-arrow-left" @click="$router.go(-1)"></el-button>
      <div style="display:flex; align-items:center;">
        <span class="hidden-xs-only">Если у вас есть вопросы, напишите нам в чате</span>
        <img :src="telegramChat" alt="" class="pl1">
      </div>
    </el-row>
</template>

<script>
  export default {
    data: () => ({
      logo: require('../assets/logo.svg'),
      telegramChat: require('../assets/img/social/telegram-chat.svg')
    })
  }
</script>

<style>
.header-wrapper {
    padding: 23px 0;
  }
</style>
