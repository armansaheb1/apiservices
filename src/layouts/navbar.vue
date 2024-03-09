<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light" style="border-bottom: solid lightgrey 1px; width: 100%">
      <div class="container-fluid">
        
        <a class="navbar-brand" href="/"><button class="btn btn-dark">ترین</button></a>
        <div style="width: 100%" class="mnot">
        </div>
      </div>
    </nav>
    <vue-final-modal style="width:100% ; background:none" v-model="showModal">
      <login />
    </vue-final-modal>
  </div>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import axios from 'axios'
import login from './../components/modal/Login.vue'
export default {
  name: 'navbar',
  props: {
    msg: String
  },
  components: {
    VueFinalModal,
    ModalsContainer,
    login
  },
  mounted() {
    this.get_user()
  },
  data() {
    return {
      showModal: false,
      name: '',
    }
  },
  methods: {
    async get_user() {
      await axios
        .get('/user')
        .then(response => response.data[0])
        .then(response => {
          this.name = `${response.username}`
        })
    },
    login() {
      this.showModal = true
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 10768px) {
  .mnot {
    display: none
  }

}
</style>
