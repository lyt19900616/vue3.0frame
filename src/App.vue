<template>
  <div id="app">
    <loading v-show="LOADING"></loading>
    <router-view/>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Loading from 'components/Loading.vue'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapState(['LOADING'])
  },
}
</script>
<style>
@import "common/normalize.css";
#app {
  margin-top: 46px;
}
</style>
