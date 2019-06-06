<template>
    <el-row type="flex" justify="space-between">
      <img  :src="require('../assets/logo.svg')" alt="logo">
      <el-dropdown>
  <div class="d-flex align-center">
        
        <span class="hidden-xs-only">Если у вас есть вопросы, напишите нам в чате</span>
        <img  :src="require('../assets/img/social/telegram-chat.svg')" alt="" class="pl1">
      </div>
  <el-dropdown-menu style="padding: 0; margin: 5px -12px 0 0;" slot="dropdown">
    <el-dropdown-item v-for="(item, item_id) in social" :key="item_id+'header-social'"  class="px1">
      <div class="d-flex align-center py1">
        <img :src="item.src" alt="" width="24">
        <div class="small-text pl1">{{item.text}}</div>
      </div>
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      
    </el-row>
</template>

<script>
  export default {
    data: () => ({
      social: [
        {
          src: require('../assets/img/social/fb.svg'),
          text: 'FB'
        },
        {
          src: require('../assets/img/social/vk.svg'),
          text: 'VK'
        },
        {
          src: require('../assets/img/social/viber.svg'),
          text: 'Viber'
        },
        {
          src: require('../assets/img/social/whatsApp.svg'),
          text: 'WA'
        }
      ]
    })
  }
</script>
