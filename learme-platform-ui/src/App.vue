<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  body {
    font-family: 'Open Sans';
    background: #F1F7FD;
    color: #616161;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    display: flex;
    margin-top: 0;
    justify-content: center;
    text-align: center;
    color: #151515;
  }
  .h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
  }
  input.el-input__inner {
    height: 50px;
  }
  input.el-input__inner::placeholder {
    color: #616161 !important;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .justify-center {
    justify-content: center;
  }
  .line-height-21 {
    line-height: 21px !important;
  }
  .link {
    color: #1A80E6;
    text-decoration: none;
  }
  .divider-top {
    border-top: 1px solid #E0E0E0;
  }
  .divider-bottom {
    border-bottom: 1px solid #E0E0E0;
  }
  .divider-right {
    border-right: 1px solid #E0E0E0;
  }
  .secondary-text {
    color: #9E9E9E;
  }
  .header {
    background: #FFFFFF;
    width: 100%;
  }
  .bold {
    font-weight: bold !important;
  }
  .footer-content {
    border-top: 1px solid #E0E0E0;
    padding: 16px 0 32px 0;
  }
  .main-row {
    min-height: calc(100vh - 177px); 
    display: flex;
  }
  @media only screen and (min-width: 320px) {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
    .h2 {
      font-size: 16px;
      line-height: 24px;
    }
    .el-footer {
      padding: 0 !important;
    }
    .footer-content {
      text-align: center;
      padding: 6px 0 16px 0;
      font-size: 12px;
    }
    input.el-input__inner {
      height: 40px;
    }
    .w-xs-100 {
      width: 100%;
    }
  }
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 30px;
      line-height: 36px;
    }
    .h2 {
      font-size: 24px;
      line-height: 32px;
    }
    .el-footer {
      padding: 0 24px !important;
    }
    .footer-content {
      text-align: left;
    }
  }
  @media (min-width: 1440px) {
    h1 {
      font-size: 30px;
      line-height: 36px;
    }
    .el-footer {
      padding: 0 135px !important;
    }
  }
</style>
