import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actor: [
      {name: '李雪健', age: 66, production: '水浒传',tag: true},
      {name: '陈道明', age: 65, production: '康熙王朝',tag: true},
      {name: '陈宝国', age: 64, production: '大宅门', tag: true},
      {name: '唐国强', age: 68, production: '三国演义', tag: true},
      {name: '何冰', age: 52, production: '白鹿原', tag: true},
      {name: '李耀亭', age: 30, production: 'VUE', tag: false}
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
    
  },
  actions: {
   
  },
  modules: {
  }
})
