<template>
  <div class="container">
    <h1 class="title">
      Tint
    </h1>
    <p class="desc">
      Hue or mixture of pure colors with only White added (or moving closer to white)
    </p>
    <div class="colors">
      <ColorStripe
      :colorHexs="colorHexs"
      :textColors="textColors"
      originColor="3888E3"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorStripe from './common/ColorStripe.vue'

export default defineComponent({
  name: 'Tint',
  components: {
    ColorStripe
  },
  data() {
    return {
      colorHexs: ['3888E3', '458FE4', '5398E6', '61A0E8', '70A9E8', '7EB2ED', '8CBAEF', '9AC2F1', 'A9CBF3', 'B7D4F5', 'C6DDF7', 'D4E5F9', 'E2EEFB', 'F1F6FD', 'FFFFFF'],
      textColors: ['fff', 'fff', 'fff', 'fff', 'fff', '000', '000', '000', '000', '000', '000', '000', '000', '000', '000']
    }
// rgb:
// 56,136,227
// 69,143,228
// 83,152,230
// 97,160,232
// 112,169,232
// 126,178,237
// 140,186,239
// 154,194,241
// 169,203,243
// 183,212,245
// 198,221,247
  }
})

</script>

<style scoped>

div.container {
  height: 100vh;
  padding: 100px;
  background: white;
  color: black;
}

h1.title {
  font-size: 3rem;
  font-weight: 900;
}

p.desc {
  font-size: 1rem;
}

div.colors {
  margin-top: 1rem;
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: flex-start;
}

</style>
