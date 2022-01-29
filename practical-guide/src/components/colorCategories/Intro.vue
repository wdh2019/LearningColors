<template>
  <div class="container">
    <div class="next">
      <Next href="/ColorCategories/Main" />
    </div>
    <div class="title">
      <h1>Color Categories and Families</h1>
    </div>
    <div class="content">
      <p>
        The trick to getting really great looking color palettes
        is to stick with one category or pair one category with neutrals.
        The best part is <span class="strong yellow">you only need to find 1 color</span>
        to make it all match!
      </p>
    </div>
    <div class="decorations">
      <div class="spot purple"></div>
      <div class="spot red"></div>
      <div class="spot blue"></div>
      <div class="spot yellow"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Next from '../common/Next.vue'

export default defineComponent({
  name: "ColorCategories",
  components: {
    Next
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
  align-items: center;
  padding: 20vh 20vw;
  background-color: #223450;
  color: #fff;

  .title {
    font-size: 1.3rem;
    font-weight: 900;
  }

  .content {
    width: 35vw;
    margin: 10vh 0 0 0;
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 2;
    text-align: center;
    span {
      font-weight: 900;
      font-size: 1.1em;
      &.yellow {
        color: rgb(239,206,89);
      }
    }
  }

  .decorations {
    .spot {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      &.purple {
        width: 22px;
        height: 22px;
        left: 10vw;
        top: 30vh;
        background-color: rgb(231,65,206);
      }
      &.red {
        right: 10vw;
        top: 26vh;
        background-color: rgb(254,113,120);
      }
      &.yellow {
        width: 60px;
        height: 60px;
        right: 18vw;
        bottom: 20vh;
        background-color: rgb(239,206,89);
      }
      &.blue {
        width: 40px;
        height: 40px;
        left: 20vw;
        bottom: 22vh;
        background-color: rgb(84,117,255);
      }
    }
  }

}

</style>
