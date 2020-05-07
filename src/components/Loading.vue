<template>
  <div class="loading">
    <!-- <van-loading type="spinner" size="24px" /> -->
    <van-loading size="24px">加载中...</van-loading>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
  .loading {
    position: fixed;
    top: 46;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.4); */
    /* background: #efefef; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading img {
    width: 50px;
    height: 50px;
  }
</style>