<template>
  <div class="container">
    <div class="next">
      <Next href="/ColorModels" />
    </div>
    <div class="left">
      <h1>
        Creating a beautiful color palette is all about balancing
        <router-link class="link" to="/Hue">hue</router-link>,
        <router-link class="link" to="/Tint">tint</router-link>,
        <router-link class="link" to="/Tone">tone</router-link>,
        <router-link class="link" to="/Shade">shade</router-link> and 
        <router-link class="link" to="/Temperature">temperature</router-link>
      </h1>
    </div>
    <div class="right">
      <div class="palette">
        <div
          class="color"
          style="background: rgb(82,129,206)"></div>
        <div class="desc">
          <p>Periwinkle Blue</p>
          <p>5281CE</p>
        </div>
      </div>
      <div class="palette">
        <div
          class="color"
          style="background: rgb(153,140,235)"
        ></div>
        <div class="desc">
          <p>Teacup Lilac</p>
          <p>998CEB</p>
        </div>
      </div>
      <div class="palette">
        <div
          class="color"
          style="background: rgb(233,215,135)"
        ></div>
        <div class="desc">
          <p>Dijon Yellow</p>
          <p>E9D787</p>
        </div>
      </div>
      <div class="palette">
        <div
          class="color"
          style="background: rgb(255,143,151)"
        ></div>
        <div class="desc">
          <p>Raspberry Cream Red</p>
          <p>FF8F97</p>
        </div>
      </div>
      <div class="palette">
        <div
          class="color"
          style="background: rgb(158,245,255)"
        ></div>
        <div class="desc">
          <p>Icicle Teal</p>
          <p>9EF5FF</p>
        </div>
      </div>
      <div class="palette">
        <div
          class="color"
          style="background: rgb(186,232,172)"
        ></div>
        <div class="desc">
          <p>Pistachio Green</p>
          <p>BAE8AC</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Next from './common/Next.vue'

export default defineComponent({
  name: 'Entry',
  components: {
    Next
  },
  data() {
    return {
      com: 'Tint'
    }
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #C2F3FF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    padding: 0 10vw 0 10vw;
    line-height: 2;
    a {
      text-decoration: none;
      &:link, &:visited, &:active {
        color: #5D84DF;
      }
      &:hover {
        color: #80ABF9;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 50vw;
    height: 100vh;
    .palette {
      width: 12vw;
      height: 30vh;
      padding: 10px;
      margin: 0 15px;
      background: #fff;
      border-radius: 10px;
      .color {
        height: 10vw;
      }
      .desc {
        font-size: 0.8rem;
        padding: 1rem 0 0 0.2rem;
      }
    }
  }

}
</style>
