<template>
  <div class="container">

    <div class="next">
      <Next href="/ColorCategories" />
    </div>

    <div class="colors warm-colors">
      <h1>Warm (Active) Colors</h1>
      <div class="wrapper">
        <div
          class="color"
          :style="`background:#${color[0]}`"
          v-for="(color, index) in warmColors"
          :key="index"
        >
          <div
            class="text"
            :style="`color:#${color[1]}`"
          >
            {{ color[0] }}
          </div>
        </div>
      </div>
    </div>

    <div class="colors cool-colors">
      <h1>Cool (Passive) Colors</h1>
      <div class="wrapper">
        <div
          class="color"
          :style="`background:#${color[0]}`"
          v-for="(color, index) in coolColors"
          :key="index"
        >
          <div
            class="text"
            :style="`color:#${color[1]}`"
          >
            {{ color[0] }}
          </div>
        </div>
      </div>
    </div>

    <div class="playscripts">
      <p>There are two large groupings of colors that you often hear about: <span class="strong">warm</span> and <span class="strong">cool</span>.</p>
      <p><span class="strong">Warm colors</span> are often considered active colors, because they draw more focal attention.</p>
      <p><span class="strong">Cool colors</span> tend to be considered more passive, because they recede a bit.</p>
      <p>But depending on how rich the colors are and how the are balanced,</p>
      <p>you could have soft, <span class="strong">warm colors</span> that play the role of a passive element,</p>
      <p>while more vivid colors play an active role.</p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Next from './common/Next.vue'

export default defineComponent({
  name: 'ColorGroupings',
  components: {
    Next
  },
  data() {
    return {
      warmColors: [['C9CBA3', '000'], ['FFE1A8', '000'], ['E26D5C', 'fff'], ['723D46', 'fff'], ['472D30', 'fff']],
      coolColors: [['03045E', 'fff'], ['0077B6', 'fff'], ['00B4D8', 'fff'], ['90E0EF', '000'], ['CAF0F8', '000']]
    }
  }
})
</script>

<style lang="less" scoped>
.strong {
  font-size: 1rem;
  font-weight: 900;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 10px;

  .colors {
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      width: 100%;
      .color {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 7.5vw;
        height: 50vh;
        transition: all 0.5s;
        cursor: pointer;
        clear: both;
        .text {
          font-size: 0.2rem;
          transition: all 0.5s;
        }
        &:hover {
          width: 9vw;
          .text {
            font-size: 1rem;
            font-weight: 900;
            transform: translateY(-200%);
          }
        }
      }
    }
  }

  .playscripts {
    width: 100vw;
    line-height: 2;
    text-align: center;
  }
}
</style>
