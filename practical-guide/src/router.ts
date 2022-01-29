import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Entry from '@/components/Entry.vue'
import Hue from '@/components/Hue.vue'
import Tint from '@/components/Tint.vue'
import Tone from '@/components/Tone.vue'
import Shade from '@/components/Shade.vue'
import Temperature from '@/components/Temperature.vue'
import ColorModels from '@/components/ColorModels.vue'
import ColorGroupings from '@/components/ColorGroupings.vue'
import ColorCategories_Intro from '@/components/colorCategories/Intro.vue'
import ColorCategories_Main from '@/components/colorCategories/Main.vue'
import ColorCombinations from '@/components/ColorCombinations.vue'


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
  },
  {
    path: '/ColorGroupings',
    component: ColorGroupings
  },
  {
    path: '/ColorCategories',
    component: ColorCategories_Intro,
  },
  {
    path: '/ColorCategories/Main',
    component: ColorCategories_Main
  },
  {
    path: '/ColorCombinations',
    component: ColorCombinations
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router