<template>
  <div>
      <div :class="$store.state.collapse ? 'big-collapse' : 'big-ncollapse'" style="">
        <navbar />
        <router-view></router-view>
      </div>
      <div :class="$store.state.collapse ? 'small-collapse' : 'small-ncollapse'" style="" class="bg-dark side">
        <sidebar />
      </div>
      
      <footer />
  </div>
</template>

<script>
import navbar from './navbar.vue'
import footer from './footer.vue'
import sidebar from './sidebar2.vue'

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
<style>
.big-collapse{
  width:100% ; padding-right:55px ; float:left ; left: 0 ; position: absolute
}
.big-ncollapse{
  width:80% ; float:left
}
.small-collapse{
  width:55px ; float:right ; height:100% ; position:fixed ; overflow:auto ; right: 0
}
.small-ncollapse{
  width:20% ; float:right ; height:100% ; position:fixed ; overflow:auto ; right: 0
}
@media only screen and (max-width: 600px) {
.big-ncollapse{
  width:100%!important ; padding-right:55px ; float:left ;position: absolute ; left: 0
}
.big-collapse{
  width:100% ; padding-right:55px ; float:left ;position: absolute ; left: 0
}
.small-ncollapse{
  width:50%!important ; float:right ; height:100% ; position:fixed ; overflow:auto ; right: 0
}
}
</style>