<template>
  <div class="container">
    <h1 class="title">
      Tone
    </h1>
    <p class="desc">
      Hue or mixture of pure colors with only Gray added (or moving closer to gray)
    </p>
    <div class="colors">
      <ColorStripe
      :colorHexs="colorHexs"
      originColor="3888E3"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorStripe from './common/ColorStripe.vue'

export default defineComponent({
  name: 'Tone',
  components: {
    ColorStripe
  },
  data() {
    return {
      colorHexs: ['3888E3', '3C87DC', '4988D0', '4F88CA', '5589C4', '5B89BD', '6189B7', '678AB1', '6E8AAB', '748BA5', '7A8B9F', '808B99', '868C92', '8C8C8C']
    }
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
