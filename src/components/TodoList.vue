<template>
  <div>
    <ul>
      <li class="shadow">
        <i class="checkBtn fa fa-check checkBtnCompleted"  ></i>
        <span class="textCompleted"></span>
        <span class="removeBtn" >
          <i class="fa fa-trash" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props : ['propsdata'],
  method : {

  }
}
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