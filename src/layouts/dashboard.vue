<template>
  <div>
     
  </div>
</template>

<script>
import axios from 'axios'
import login from './../components/Login2.vue'
export default {
  name: 'navbar',
  props: {
    msg: String
  },
  components:{
    login
  },
  beforeMount(){
    this.get_user = async () => {
        if(this.$route.params.id){
            var afterroute = `/${this.$route.params.id}`
        }else{
            var afterroute = ``
        }
      await axios
      .get('/user')
      .then(response => response.data[0])
      .then(response => {
        if(response.freelancer){
            const toPath =  '/dashboard'
            this.$router.push(toPath + afterroute)
        }else{
            const toPath =  '/dashboard'
            this.$router.push(toPath + afterroute)
        }
      })
    }
    this.get_user()
  },
  data(){
    return {
      showModal: false,
      name: '',
    }
  },
  methods:{
    
      login(){
      this.showModal = true
    }
  }
}
</script>

<style scoped>
</style>
