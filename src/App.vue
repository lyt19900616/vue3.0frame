<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" @change="changeItem">
      <van-tabbar-item icon="smile-o">getter</van-tabbar-item>
      <van-tabbar-item icon="smile-o">mutation</van-tabbar-item>
      <van-tabbar-item icon="smile-o">action</van-tabbar-item>
      <van-tabbar-item icon="smile-o">module</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    changeItem (item) {
      switch (item) {
        case 0:
          this.$router.replace('/home')
          break;
        case 1:
          this.$router.replace('/mutation')
          break;
        case 2:
          this.$router.replace('/action')
          break;
        case 3:
          this.$router.replace('/module')
          break;
          
        default:
          break;
      }
      
    }
  },
}
</script>
<style>
@import "common/normalize.css";
#app {
  /* 主题颜色 */
  --themeColor: #4E74BB;
  /* 标题，导航的颜色 */
  --mainBlack: #262626;
  /* 次黑色 */
  --subBlack: #3A3A3A;
  /* 段落标题  深灰色*/
  --darkGray: #7C7C7C;
  /* 大幅文字 灰色 */
  --norGray: #A5A5A5;
  /* 分割线颜色 */
  --lineColor: #D3D3D3;
  /* 背景色 */
  --backgroundColor: #E5E5E5;
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  background-color: var(--themeColor) !important;
}
.van-nav-bar__title {
  color: #fff !important;
}
.van-nav-bar__text {
  color: #fff !important;
}
.van-nav-bar .van-icon {
  color: #fff !important;
}
</style>
