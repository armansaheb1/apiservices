<template>
  <div>
        <router-view></router-view>
      <footer />
  </div>
</template>

<script>
import navbar from './navbar.vue'
import footer from './footer.vue'
import sidebar from './sidebar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
      navbar,
      footer,
      sidebar
  }
}
</script>

<style scoped>
.side::-webkit-scrollbar{
  width:0

}
</style>
