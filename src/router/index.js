import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../layouts/layout1'
import layout2 from '../layouts/layout2'
import layout3 from '../layouts/layout3'
import blank from '../layouts/blank'

const routes = [
  {
    path:'/',
        component: layout2,
        children: [
            {
              path:'',
              component: () => import('@/components/pages/Dashboard')
            },
            {
              path:'texts',
              component: () => import('@/components/pages/texts')
            }
            
        ]
  },{
    path:'/',
        component: layout1,
        children: [
            {
              path:'login',
              component: () => import('@/components/modal/Login')
            }
        ]
  },{
    path:'/cpanel/',
        component: layout3,
        children: [{
              path:'',
              component: () => import('@/components/pages/Dashboard')
            }
        ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router