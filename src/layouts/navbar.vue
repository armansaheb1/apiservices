<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light" style="border-bottom: solid lightgrey 1px; width: 100%">
      <div class="container-fluid">
        
        <a @click="train()" class="navbar-brand"  style="width: 100%; text-align: right;"><button id="train" class="btn btn-dark">ترین</button></a>
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
  },
  data() {
    return {
      showModal: false,
      name: '',
    }
  },
  methods: {

    async train() {
      var btn = document.getElementById('train')
      btn.disabled = true
      btn.innerHTML = 'در حال ترین'
      await axios
        .get('/train')
        .then(response => {
          btn.disabled = false
          btn.innerHTML = 'ترین'
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
