<template>
    <el-row type="flex" justify="space-between">
      <img  :src="logo" alt="logo">
    </el-row>
</template>

<script>
  export default {
    data: () => ({
      logo: require('../assets/logo.svg')
    })
  }
</script>


