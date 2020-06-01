<template>
  <div>
    <div class="list-item" v-for="(item, index) in actor" :key="index">
      <span class="list-con">{{item.name}}</span>
      <span class="list-con">{{item.age}}岁</span>
      <span class="list-con">{{item.production}}</span>
      <span class="list-con">{{item.tag ? '演员' : '非演员'}}</span>
      <span class="list-con">{{item.role}}</span>
    </div>
    <div class="list-title" @click="changeName">异步修改非演员名称</div>
    <div class="list-title" @click="addActor">异步添加演员</div>
  </div>  
</template>

<script>
// import { ADDROLE } from '../store/storeconst'
export default {
  data() {
    return {
      actor: this.$store.state.actor
    }
  },
  methods: {
    changeName () {
      this.$store.dispatch('changeActorAsyn')
    },
    addActor () {
      let actor = {name: '周星星', age: 58, production: '大话西游',tag: true}
      this.$store.dispatch('addActorAsyn',actor)
      .then( res => {
        console.log(res);
      })
    }
  },
}
</script>
<style scoped>
.list-title {
  padding: 10px;
  color: var(--themeColor);
  font-size: 1rem;
  border-bottom: 1px dashed var(--themeColor);
}
.list-con {
  display: inline-block;
  margin: 10px;
  color: var(--subBlack);
}

</style>
