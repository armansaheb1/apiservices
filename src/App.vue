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
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot?#iefix') format('embedded-opentype'),
    url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.woff') format('woff'),
    url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Yekan';
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan-Bold.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan-Bold.eot?#iefix') format('embedded-opentype'),
    url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan-Bold.woff') format('woff'),
    url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan-Bold.ttf') format('truetype');
  font-weight: bold;
}

a,h1,h2,h3,h4,h5,h6,button,input,p,textarea , span{
  font-family: 'Yekan'
}

.card-header{
  text-align: center!important;
  font-family: 'Yekan'
}
</style>