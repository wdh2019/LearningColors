<template>
  <div class="container">
    <h1 class="title">
      Temperature
    </h1>
    <p class="desc">
      Our perception of color as being either warm or cool
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
  name: 'Temperature',
  components: {
    ColorStripe
  },
  data() {
    return {
      colorHexs: ['3961E3', '3866E3', '386CE3', '3871E3', '3877E3', '3882E3', '3888E3', '3E85DD', '4482D7', '5D77BF', '6971B2', '756CA6', '81669A', '8E618E']
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
