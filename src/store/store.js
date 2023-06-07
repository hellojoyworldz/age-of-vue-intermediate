// 코어 라이브러리 2개 다운받은 것
// node_modules 밑에
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex); // use : vue 플러그인. 전역으로 특정 기능을 추가하고 싶을 떄

const storage = {
  fetch() {
    // fetch: function()
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            arr.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  // export const 변수 다른곳에서 사용 가능
  state: {
    todoItems: storage.fetch(),
  },
});
