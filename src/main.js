import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import { vfmPlugin } from 'vue-final-modal'
import VueSweetalert2 from 'vue-sweetalert2'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

axios.defaults.baseURL = 'http://162.0.238.123/api/v1/'

createApp(App).use(store).use(VueSweetalert2).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
