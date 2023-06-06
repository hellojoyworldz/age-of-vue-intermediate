<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:cleanAll="cleanAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  // Enhanced Object Literals - 향상된 객체 리터럴
  data(){
    return{
      todoItems:[]
    }
  },
  methods: {
    addOneItem(todoItem){
      const obj = {completed:false, item:todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem (todoItem,index){
      localStorage.removeItem(todoItem.item) 
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem, index){
      // 컴포넌트간의 관계를 좀 더 명확하게 한다
      //todoItem.completed = !todoItem.completed
      this.todoItems[index].completed = !this.todoItems[index].completed
      
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    cleanAllItems(){
      localStorage.clear()
      this.todoItems = []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) { // 반복문은 let
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  }
  ,components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6
}

input{
  border-style:groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}
</style>