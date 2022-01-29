<template>
  <div class="container">
    <div class="next">
      <Next href="/ColorCombinations" />
    </div>
    <div class="title">
      <h1>6 Color Categories</h1>
    </div>
    <div class="content">
      <div
        class="row"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div class="title">{{ category.name }}</div>
        <div class="colors">
          <div
            class="color"
            v-for="(color, index) in category.colors"
            :key="index"
            :style="`background: #${color}`"
          >
            <div class="text">
              {{color}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Next from '../common/Next.vue'

export default defineComponent({
  name: "ColorCategory",
  components: {
    Next
  },
  data() {
    return {
      categories: [
        {
          name: 'Jewel Tones',
          colors: ['0B857B', '143B84', '206B97', '6A249A', '952B5A', 'DE9030']
        },
        {
          name: 'Pastel Tones',
          colors: ['ECC8E5', 'D9E7E4', 'DDECFF', 'FFDACE', 'FEEED6', 'E3CEEE']
        },
        {
          name: 'Earth Tones',
          colors: ['A17463', '915140', 'C98D4B', '09422E', '167E5B', '3482A9']
        },
        {
          name: 'Neutral Tones',
          colors: ['AB9B9A', 'CFB0A7', 'FCF6F3', 'EDEFF1', '868688', 'D1CED1']
        },
        {
          name: 'Fluorescent Tones',
          colors: ['F900CF', '05EFC9', '6AF504', '0399FF', '6252FE', 'DDFF0F']
        },
        {
          name: 'Shades',
          colors: ['000000', 'FCFCFC']
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
    flex-direction: column;
    width: 35vw;
    margin: 10vh 0 0 0;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 2;
    .row {
      display: flex;
      align-items: center;
      margin: 20px 0;
      .title {
        width: 10rem;
        font-size: 1.1rem;
        font-weight: 900;
        text-align: right;
        margin-right: 1rem;
      }
      .colors {
        display: flex;
        .color {
          position: relative;
          width: 40px;
          height: 40px;
          margin: 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s;
          .text {
            position: absolute;
            top: 40px;
            left: 0;
            font-size: 0.5rem;
            color: #fff;
            transition: all 0.5s;
          }
          &:hover {
            border: 1px solid #bbbbbb;
            transform: scale(1.2);
            .text {
              color: #000;
            }
          }
        }
      }
    }
  }
}

</style>
