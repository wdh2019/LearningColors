<template>
  <div class="container">
    <!-- <div class="next">
      <Next href="/ColorCategories" />
    </div> -->
    <div class="title">
      <h1>UI Color Combinations</h1>
    </div>
    <div class="content">
      <div
        class="col"
        v-for="(combination, index) in combinations"
        :key="index"
      >
        <div class="title">{{ combination.name }}</div>
        <div class="colors">
          <div
            class="color"
            v-for="(color, index) in combination.colors"
            :key="index"
            :style="`background: #${color}`"
          >
            <div
              class="text"
              :style="`color: #${combination.textColors[index]}`"
            >
              {{ color }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Next from './common/Next.vue'

export default defineComponent({
  name: "ColorCategory",
  // components: {
  //   Next
  // },
  data() {
    return {
      combinations: [
        {
          name: 'Shade + Pastel',
          colors: ['000000', 'F5F3F5', 'EFF2FF', 'EDFCED', 'E3F2FD'],
          textColors: ['fff', '000', '000', '000', '000']
        },
        {
          name: 'Neutral + Earth',
          colors: ['EDD6C2', 'FEFEFE', '054B52', 'ECB259', '6D5679'],
          textColors: ['000', '000', 'fff', 'fff', 'fff']
        },
        {
          name: 'Fluorescent + Shade',
          colors: ['1151F7', 'FEFEFE', 'F3F4FF', 'FC9005', '01B381'],
          textColors: ['fff', '000', '000', 'fff', 'fff']
        }
      ]
    }
  }
})
</script>


<style lang="less" scoped>

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 1.3rem;
    font-weight: 900;
  }

  .content {
    display: flex;
    margin: 10vh 0 0 0;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 2;
    .col {
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin: 20px;
      width: 30vw;
      .title {
        font-size: 1.1rem;
        font-weight: 900;
        margin-right: 1rem;
      }
      .colors {
        display: flex;
        .color {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 6rem;
          height: 6rem;
          margin: 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          margin-left: -30px;
          z-index: 1;
          .text {
            font-size: 0.5rem;
            transition: all 0.5s;
            opacity: 0;
          }
          &:hover {
            border: 1px solid #bbbbbb;
            transform: scale(1.2);
            z-index: 2;
            .text {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

</style>
