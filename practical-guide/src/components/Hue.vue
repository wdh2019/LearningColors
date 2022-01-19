<template>
  <div class="container">
    <h1 class="title">
      Hue
    </h1>
    <p class="desc">
      Refers to the dominant Color Family of the specific color we're looking at.
      White, Black and Grey are never referred to as a Hue.
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
  name: 'Hue',
  components: {
    ColorStripe
  },
  data() {
    return {
      colorHexs: ['39E371', '39E38F', '39E3AC', '39E3C9', '39E0E3', '39C3E3', '39A5E3', '3888E3', '396BE3', '394EE3', '4139E3', '5E39E3', '7B39E3', '9839E3', 'B639E3']
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
