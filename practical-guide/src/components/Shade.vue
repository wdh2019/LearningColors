<template>
  <div class="container">
    <h1 class="title">
      Shade
    </h1>
    <p class="desc">
      Hue or mixture of pure colors with only Black added (or moving closer to black)
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
  name: 'Shade',
  components: {
    ColorStripe
  },
  data() {
    return {
      colorHexs: ['3888E3', '257CF0', '1E72D2', '1C69C1', '195FAF', '17569E', '144C8C', '12437B', '0F3969', '0D3058', '09223D', '051323', '030A12', '000000']
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
