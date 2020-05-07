<template>
  <div class="home-box">
    <van-nav-bar fixed title="首页" />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { testData } from 'network/request.js'

export default {
  data() {
    return {
      
    }
  },
  created() {
     let param = {
       channelType: '0', 
       pageNum: this.pageNum, 
       pageSize: '10'
     }
     let _this = this
     testData('/dialogue/problemQuery',param).then(res => {
      console.log(res)
      if (res.code === '000000') {
        if (_this.refreshing) {
          _this.list = [];
          _this.refreshing = false;
        }
        _this.totalCount = res.data.totalCount
        _this.list = _this.list.concat(res.data.list)
        _this.loading = false
        if (_this.list.length >= _this.totalCount) {
          _this.finished = true
        }
      } else {
        Toast(res.message)
      }
    })
  }
}
</script>
<style>
.home-box .van-nav-bar {
  background-color: #4E74BB;
}
.home-box .van-nav-bar__title {
  color: #fff;
}
.home-box .van-nav-bar__text {
  color: #fff;
}
.home-box .van-nav-bar .van-icon {
  color: #fff;
}
</style>
