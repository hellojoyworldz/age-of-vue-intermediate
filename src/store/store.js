// 코어 라이브러리 2개 다운받은 것
// node_modules 밑에
import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations"; // export한 내용 다 담기

Vue.use(Vuex); // use : vue 플러그인. 전역으로 특정 기능을 추가하고 싶을 떄

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters,
  mutations,
});
