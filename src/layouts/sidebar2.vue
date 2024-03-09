<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark">
      <a v-if="$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; margin-left: 15px ; height:70px ; padding-top : 10px"><font-awesome-icon
          :icon="['fas', 'angles-left']" /></a>
      <a v-if="!$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; position:absolute ; left: 10px"
        class="lefty"><font-awesome-icon :icon="['fas', 'angles-right']" /></a>
      <a v-if="!$store.state.collapse" class="navbar-brand" href="/"
        style="font: 25px 'arial'; color:#efefef ; height:70px ; padding:10% ; text-align:right ;float:right; width: 100% ; padding-right: 2%"></a>
    </nav>
    <nav class="navbar bg-dark" style="border-top: solid 1px grey ; padding:0">
      <div class="" style="padding:0 ; width:100% ; text-align:left ; font-family: 'Yekan'">

        <SidenavLink :active="true" style="width:100%" icon="list" href="/cpanel"><a v-if="!$store.state.collapse">
            داشبورد</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="address-card" href="/cpanel/buy"><a
            v-if="!$store.state.collapse"> درخواست کارت</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="coins" href="/cpanel/coin"><a
            v-if="!$store.state.collapse"> کوین وب اپ باز</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="wallet" href="/cpanel/wallet"><a
            v-if="!$store.state.collapse"> کیف پول</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="user" href="/cpanel/profile"><a
            v-if="!$store.state.collapse"> پروفایل کاربری</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="question-circle" href="/cpanel/faq"><a
            v-if="!$store.state.collapse"> سوالات متداول</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="address-card" href="/cpanel/support"><a
            v-if="!$store.state.collapse"> پشتیبانی</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="list" href="/cpanel/logout"><a
            v-if="!$store.state.collapse"> خروج</a></SidenavLink>


      </div>
    </nav>
  </div>
</template>

<script>
import SidenavLink from './sidebar/SidenavLink.vue'
import SidenavMenu from './sidebar/SidenavMenu.vue'
import SidenavRouterLink from './sidebar/SidenavRouterLink.vue'
import Toggle from '@vueform/toggle'

import axios from 'axios'
export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  components: {
    SidenavLink,
    SidenavMenu,
    SidenavRouterLink,
    Toggle,
  },
  beforeMount() {
    this.get_u = async () => {
      await axios
        .get('user')
        .then()
        .catch(() => {
          const toPath = '/login'
          this.$router.push(toPath)
        })
    }
    this.get_u()
  },
  mounted() {
  },
  data() {
    return {
      showModal: false,
      freelancer: false,
      name: '',
    }
  },
  methods: {
    collapse() {
      this.$store.state.collapse = !this.$store.state.collapse
    },
    async get_user() {
      await axios
        .get('/user')
        .then(response => response.data[0])
        .then(response => {
          this.name = `${response.first_name} ${response.last_name}`
          this.freelancer = response.freelancer
        }).catch(() => {
          const toPath = '/'
          this.$router.push(toPath)
        })
    },
    async toggle() {
      await axios
        .post('/togglerole')
        .then(response => {
          const toPath = '/dashboard'
          this.$router.push(toPath)
        })
    },
    login() {
      this.showModal = true
    }
  }
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style>
.toggle {
  width: 100%;
  height: 30px;
}

.toggle-red {
  --toggle-bg-on: darkblue;
  --toggle-border-on: darkblue;
}

.toggle-label {
  margin-right: 35px;
  font-weight: bold;
  margin-left: 5px
}

.toggle-handle {
  height: 30px;
  width: 30px
}
</style>
