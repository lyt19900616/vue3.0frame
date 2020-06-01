import Vue from 'vue'
import Vuex from 'vuex'
// import { ADDROLE } from './storeconst'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    actor: [
      {name: '李雪健', age: 66, production: '水浒传',tag: true},
      {name: '陈道明', age: 65, production: '康熙王朝',tag: true},
      {name: '陈宝国', age: 64, production: '大宅门', tag: true},
      {name: '唐国强', age: 68, production: '三国演义', tag: true},
      {name: '何冰', age: 52, production: '白鹿原', tag: true},
      {name: '李耀亭', age: 18, production: 'demo', tag: false}
    ]
  },
  getters: {
    getActor(state) { // 指定的处理 获取是演员的数据
      return state.actor.filter( actor => actor.tag)
    },
    getActorByAge(state) { // 根据我们传递的参数进行数据过滤
      return (age) => {
        return state.actor.filter( actor => actor.age > age)
      }
    }
  },
  mutations: {
    changeActor(state) { // 无参数
      state.actor[5].name = 'liyaoting'
    },
    addActor(state, actor) { // 有参数
      state.actor.push(actor)
    },
    addMember(state, param) { // 另一种提交方式
      state.actor.push(param.member)
    },
    addRole(state) {
      // state.actor[0]['role'] = '宋江'
      Vue.set(state.actor[0], 'role', '宋江')
      console.log(state.actor[0])
    },
    // [ADDROLE](state) {
    //   // state.actor[0]['role'] = '宋江'
    //   Vue.set(state.actor[0], 'role', '宋江')
    //   console.log(state.actor[0])
    // }
  },
  actions: {
    changeActorAsyn(context) { 
      setTimeout(() => {
        context.commit('changeActor')
      }, 1000);
    },
    // 异步结合promise使用
    addActorAsyn(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('addActor',payload)
          resolve('返回成功信息')
          reject('返回失败信息')
        }, 1000);
      })
    }
  },
  modules: {
  }
})
