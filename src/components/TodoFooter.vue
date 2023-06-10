<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      //this.$emit('cleanAll')
      this.$store.commit('cleanAll')
    }
  }

}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5em;
    height: 50px;
    line-height: 50px;
    background-color:white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn{
    color:#320303;
    display: block;
  }

</style>