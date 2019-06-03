<template>
<div class="pt3">
    <el-menu
      default-active="2"
      background-color="transparent"
            text-color="#151515"
      active-text-color="#1A80E6"
      class="side-bar-menu">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>

export default {
    data: () => ({
    })
}
</script>

<style>
    .side-bar-menu .el-menu-item:hover {
        background: transparent !important;
        color: #616161 !important;
    }
    .side-bar-menu {
        border-right: 0;
    }
  @media (min-width: 1200px) {
    
    
  }
  @media (min-width: 768px) and (max-width: 1199px) {
   
  }
  @media (max-width: 767px) {
  }
</style>
