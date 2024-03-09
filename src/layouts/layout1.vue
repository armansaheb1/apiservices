<template>
  <div>
      <navbar />
      <router-view style="padding: 5%"></router-view>
      
      <footers />
  </div>
</template>

<script>
import navbar from './navbar.vue'
import footers from './footer.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
      footers,
      navbar,
      
  }
}
</script>

<style scoped>
</style>
