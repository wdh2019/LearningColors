import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Entry from '@/components/Entry.vue'
import Hue from '@/components/Hue.vue'
import Tint from '@/components/Tint.vue'
import Tone from '@/components/Tone.vue'
import Shade from '@/components/Shade.vue'
import Temperature from '@/components/Temperature.vue'
import ColorModels from '@/components/ColorModels.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Entry,
  },
  {
    path: '/Hue',
    component: Hue
  },
  {
    path: '/Tint',
    component: Tint
  },
  {
    path: '/Tone',
    component: Tone
  },
  {
    path: '/Shade',
    component: Shade
  },
  {
    path: '/Temperature',
    component: Temperature
  },
  {
    path: '/ColorModels',
    component: ColorModels
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router