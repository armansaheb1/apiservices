<template>
  <div>

    <router-view :key="$route.fullPath" />

  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {

  },
  name: 'app',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s - Appwork'
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common.Authorization = 'Token ' + token
      this.$store.state.isAuthenticated = true
    } else {
      axios.defaults.headers.common.Authorization = ''
    }
  },
  updated() {
    setTimeout(() => document.body.classList.remove('app-loading'), 1)
  }
}
</script>
<style>

@font-face {
  font-family: 'Yekan';
  src: url('../public/Yekan.eot');
  src: url('../public/Yekan.eot?#iefix') format('embedded-opentype'),
    url('../public/Yekan.ttf') format('truetype');
  font-weight: normal;
}

*{
  font-family: 'Yekan'!important
}

.card-header{
  text-align: right!important;
  font-family: 'Yekan'!important
}
</style>