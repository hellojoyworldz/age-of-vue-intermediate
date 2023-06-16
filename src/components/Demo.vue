<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters(['originalPrice','doublePrice','triplePrice']),
    /*
    위와 아래 똑같음
    mapGetters 함수는 getters를 쉽게 가져올 수 있음
    originalPrice(){
       return this.$store.getters.originalPrice 
    },
    doublePrice(){
      return this.$store.getters.doublePrice
    },
    triplePrice(){
      return this.$store.getters.triplePrice
    }
    */
  }
   
}
</script>

<style>

</style>