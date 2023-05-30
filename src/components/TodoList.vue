<template>
    <div>
      <ul>
        <!-- v-bind:key="중복되지 않을 유일한 값을 key로" -> v-for의 성능을 가속화 -->
        <li
          v-for="(todoItem,index) in todoItems"
          v-bind:key="todoItem.item"
          class="shadow"
        >
          <i class="checkBtn fa fa-check" 
              v-bind:class="{checkBtnCompleted : todoItem.completed}" 
              v-on:click="toggleComplete(todoItem, index)"
          ></i>
          <span v-bind:class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data: function() {
      return {
        todoItems: []
      };
    },
    methods: {
      removeTodo: function(todoItem, index) {
        localStorage.removeItem(todoItem.item) // key를 지움
        this.todoItems.splice(index, 1) // 새로운 배열을 반환
        //MDN splice() API 문서 - 자바스크립트 배열 api. 특정 인덱스에서 하나를 지울 수 있다
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      },
      toggleComplete:function(todoItem,index){
        todoItem.completed = !todoItem.completed
        // 로컬 스토리지의 데이터를 갱신
        localStorage.removeItem(todoItem.item)
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      }
    },
    // vue 라이프사이클
    created: function() {
      // 인스턴스가 생성되자마자 호출되는 라이프사이클 훅
      // 훅 : 생성되는 시점에 안에 로직이 호출된다.
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) // type of localStorage.key(i) 는 string
            this.todoItems.push(localStorage.key(i));
           
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0px;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn{
  line-height: 45px;
  color:#62acde;
  margin-right: 5px;
  }
  .checkBtnCompleted{
    color:#b3adad
  }
  .textCompleted{
    text-decoration:line-througth;
    color:#b3adad;
  }
  </style>
  