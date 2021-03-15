import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //状态变量存放
  state: {
   
  },
  //状态方法,在其他地方都需要使用commit提交
  mutations: {
    
  },
  //异步操作存放在actions里面,一般情况下和promise一起使用
  actions: {
    //contex为上下文，在这里指的是store
    // layUpdate(context, payload) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(payload);
    //       //调用mutation里的方法必须用commit
    //     }, 2000);
    //   });
    // }
  },
  //类似单界面中的计算属性
  getters: {
    // max20(state) {
    //   return state.students.filter(i => i.age < 20);
    // }
  },
  //state变量模块抽离
  modules: {
    
  }
});
