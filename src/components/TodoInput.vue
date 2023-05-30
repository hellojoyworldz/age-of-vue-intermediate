<template>
  <div class="inputBox shadow">
    <!-- v-model :  input에 입력된 text값을 동적으로 뷰 인스턴스 안에 맵핑
    뷰 안에서의 인스턴스 데이터 변경(스크립트) - 화면에서의 돔조작(데이터 변경) 동일하게 동기화
    -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      //console.log(this.newTodoItem);
      // this 일반적으로 js 스코프 지칭
      // 이 this는? 2-4 강의. 같은 인스턴스를 가르킴

      // 저장하는 로직
      // 로컬 스토리지 setItem() API 공식 가이드
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
      // 로컬스토리지는 크롬 Application > Storage > Local Storage
      if(this.newTodoItem !==''){
        var obj = {completed:false,item:this.newTodoItem}
        localStorage.setItem(this.newTodoItem,JSON.stringify(obj)); // obj 객체를 string으로 변환해주는 api
        //localStorage.setItem(this.newTodoItem, obj);  // obj를 바로 넣으면 [object Object] 로 값을 못읽는다. 
        // https://medium.com/오늘의-프로그래밍/자바스크립트에서-object-object-가-대체-뭘까-fe55b754e709

        //localStorage.setItem(this.newTodoItem, this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0px 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>