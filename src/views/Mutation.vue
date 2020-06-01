<template>
  <div>
    <div class="list-item" v-for="(item, index) in actor" :key="index">
      <span class="list-con">{{item.name}}</span>
      <span class="list-con">{{item.age}}岁</span>
      <span class="list-con">{{item.production}}</span>
      <span class="list-con">{{item.tag ? '演员' : '非演员'}}</span>
      <span class="list-con">{{item.role}}</span>
    </div>
    <div class="list-title" @click="changeName">修改非演员名称</div>
    <div class="list-title" @click="addActor">添加演员</div>
    <div class="list-title" @click="addMember">添加成员</div>
    <div class="list-title" @click="addRole">添加饰演角色</div>
  </div>  
</template>

<script>
// import { ADDROLE } from '../store/storeconst'
export default {
  data() {
    return {
      actor: this.$store.state.actor,
      info: this.$store.state.info
    }
  },
  methods: {
    changeName () {
      this.$store.commit('changeActor')
    },
    addActor () {
      let actor = {name: '周星星', age: 58, production: '大话西游',tag: true}
      this.$store.commit('addActor', actor)
    },
    addMember () {
      let member = {name: '尤雨溪', age: 6, production: 'VUE',tag: false}
      this.$store.commit({
        type: 'addMember',
        member
      })
    },
    addRole () {
      this.$store.commit('addRole')
      // this.$store.commit(ADDROLE)
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
