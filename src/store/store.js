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
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  // export const 변수 다른곳에서 사용 가능
  state: {
    todoItems: storage.fetch(), //this.$store.state.todoItems
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    // method
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj); //this X, state O
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed =
        !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
    cleanAll(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
