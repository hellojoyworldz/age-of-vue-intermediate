<template>
    <div class="inputBox shadow">
      <!-- v-model :  input에 입력된 text값을 동적으로 뷰 인스턴스 안에 맵핑
      뷰 안에서의 인스턴스 데이터 변경(스크립트) - 화면에서의 돔조작(데이터 변경) 동일하게 동기화
      -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
      <span class="addContainer" v-on:click="addTodo">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </span>

      <AlertModal v-if="showModal" @close="showModal = false">
      <!-- slot : 컴포넌트의 특정 부분(일부 UI)을 재정의할 수 있다 -->
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fa fa-times" @click="showModal = false"></i>
      </h3>
      <p slot="body">바디</p>
    </AlertModal>
    </div>
  </template>
  
  <script>
  import AlertModal from './common/AlertModal.vue'
  export default {
    data() {
      return {
        newTodoItem: "",
        showModal: false
      };
    },
    methods: {
      addTodo() {
        //console.log(this.newTodoItem);
        // this 일반적으로 js 스코프 지칭
        // 이 this는? 2-4 강의. 같은 인스턴스를 가르킴

        // 저장하는 로직
        // 로컬 스토리지 setItem() API 공식 가이드
        // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        // 로컬스토리지는 크롬 Application > Storage > Local Storage
        if(this.newTodoItem !== ''){
          // this.$emit('addTodoItem',this.newTodoItem)
          this.$store.commit('addOneItem', this.newTodoItem.trim()) // mutations 동작 시키기 위해 commit
          this.clearInput();
        }else{
          this.showModal = !this.showModal
        }
      },
      clearInput() {
        this.newTodoItem = ''
      },
    },
    components:{
      "AlertModal": AlertModal,
    }
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
  .closeModalBtn{
  color: #42b983
}
  </style>
