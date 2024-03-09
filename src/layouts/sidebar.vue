<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" style="height: 65px; padding: 0; background: #4d638c;">
      <a style="height:65px; padding: 0;margin: 0;width: 100%" class="navbar-brand" href="/"><img style="height:65px; padding: 0;margin: 0; display: flex"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i9N_LRrYe005Hlnq7216cntna8NmsISSJg&usqp=CAU"
            alt=""></a>
    </nav>
    <nav class="navbar bg-dark" style="border-top: solid 1px grey ; padding:0">
      <div class="" style="padding:0 ; width:100% ; text-align:left">
        <SidenavLink style="width:100%" icon="dashboard" href=""><a v-if="!$store.state.collapse"> داشبورد</a>
        </SidenavLink>
        <SidenavLink style="width:100%" icon="address-card" href="/texts"><a v-if="!$store.state.collapse">
            متن ها</a></SidenavLink>
        <SidenavLink style="width:100%" icon="receipt" href="/q&a"><a v-if="!$store.state.collapse">
            سوال جواب ها</a></SidenavLink>
        <SidenavLink style="width:100%" icon="users" href="/users"><a v-if="!$store.state.collapse">
            کاربران</a></SidenavLink>
        <SidenavLink style="width:100%" icon="gears" href="/settings"><a v-if="!$store.state.collapse">
            تنظیمات</a></SidenavLink>
        <SidenavLink style="width:100%" icon="sign-out" href="/logout"><a v-if="!$store.state.collapse"> خروج </a>
        </SidenavLink>
        <SidenavLink style="width:100%" href="#"></SidenavLink>
      </div>
    </nav>
  </div>
</template>

<script>
import SidenavLink from './sidebar/SidenavLink.vue'
import Toggle from '@vueform/toggle'

import axios from 'axios'
export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  components: {
    SidenavLink,
    Toggle,
  },
  mounted() {
    this.get_u()
  },
  data() {
    return {
      showModal: false,
      freelancer: true,
      name: '',
    }
  },
  methods: {
    async get_u() {
      await axios
        .get('user')
        .then()
        .catch(data => {
          console.log(data)
        })
    },
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
          const toPath = ''
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
