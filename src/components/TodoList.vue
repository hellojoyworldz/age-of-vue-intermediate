<template>
    <div>
      <ul>
        <!-- v-bind:key="중복되지 않을 유일한 값을 key로" -> v-for의 성능을 가속화 -->
        <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fa fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    methods:{
      ...mapMutations({
        removeTodo: 'removeOneItem', // 암묵적으로 넘긴다 {todoItem, index}
        toggleComplete: 'toggleOneItem'
      }),
      // removeTodo(todoItem, index) {
      //   this.$store.commit('removeOneItem', {todoItem, index})
      // },
      // toggleComplete(todoItem,index){
      //   const obj = {
      //     todoItem,
      //     index
      //   }
      //   this.$store.commit('toggleOneItem',obj)
      // }
    },
    computed:{
      // todoItems(){
      //   return this.$store.getters.storedTodoItems
      // },
      ...mapGetters(['storedTodoItems'])
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
  