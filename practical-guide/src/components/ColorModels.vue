<template>
  <div class="container">

    <div class="next">
      <Next href="/ColorGroupings" />
    </div>

    <div class="title">
      <h1>Color Models</h1>
    </div>

    <div class="main">

      <div class="section" id="cmyk">

        <div class="desc">
          <h2 @click="toggleExpand('cmyk')">CMYK</h2>
          <p>
            <span class="cyan-colored strong">Cyan</span>, 
            <span class="magenta-colored strong">Magenta</span>, 
            <span class="yellow-colored strong">Yellow</span>,
            <span class="strong">Black</span> uses what is called 
            <span class="strong">subtractive</span> mixing of light to derive different colors.
          </p>
        </div>

        <div class="details" v-show="showCMYK">
          <div class="desc">
            <h2 @click="toggleExpand('cmyk')">CMYK</h2>
            <p>
              <span class="cyan-colored strong">Cyan</span>, 
              <span class="magenta-colored strong">Magenta</span>, 
              <span class="yellow-colored strong">Yellow</span>,
              <span class="strong">Black</span> uses what is called 
              <span class="strong">subtractive</span> mixing of light to derive different colors.
            </p>
          </div>
          <div class="text">
            <p>Used for pages and with printers</p>
            <p>When these 4 colors are mixed together the overlap results in black</p>
            <p>Subtractive = Because you are removing the white that's there</p>
          </div>
          <div class="img">
            <img src="../assets/cmyk.png" alt="cmyk 颜色模型">
          </div>
        </div>
      </div>

      <div class="section" id="rgb">

        <div class="desc">
          <h2 @click="toggleExpand('rgb')">RGB</h2>
          <p>
            <span class="red-colored strong">Red</span>,
            <span class="blue-colored strong">Blue</span> and 
            <span class="green-colored strong">Green</span>
             uses what is called 
            <span class="strong">additive</span> mixing of light to derive different colors.
          </p>
        </div>

        <div class="details" v-show="showRGB">
          <div class="desc">
          <h2 @click="toggleExpand('rgb')">RGB</h2>
          <p>
            <span class="red-colored strong">Red</span>,
            <span class="blue-colored strong">Blue</span> and 
            <span class="green-colored strong">Green</span>
             uses what is called 
            <span class="strong">additive</span> mixing of light to derive different colors.
          </p>
        </div>
          <div class="text">
            <p>Used for digital screen design.</p>
            <p>Like 3 bright red, green and blue lights projecting at you.</p>
            <p>Turn them all at full brightness you get pure white light.</p>
            <p>Turn them all off and you would see blackness.</p>
          </div>
          <div class="img">
            <img src="../assets/rgb.png" alt="rgb 颜色模型">
          </div>
        </div>

      </div>

      <div class="section" id="hsb">

        <div class="desc">
          <h2 @click="toggleExpand('hsb')">HSB(V)</h2>
          <p>
            <span class="strong">Hue</span>,
            <span class="strong">Saturation</span> and 
            <span class="strong">Brightness</span>
             (sometimes modeled as Value or Lightness) uses a mix of these attributes to derive different colors.
          </p>
        </div>

        <div class="details" v-show="showHSB">
          <div class="desc">
            <h2 @click="toggleExpand('hsb')">HSB</h2>
            <p>
              <span class="strong">Hue</span>,
              <span class="strong">Saturation</span> and 
              <span class="strong">Brightness</span>
              changes the purity and density of color as well as how much light is projected through the color.
            </p>
          </div>
          <div class="text">
            <p>How people actually see color and how our brains work</p>
            <p>Used by UI and Visual Screen Designers</p>
            <p>Hue - a radial 360 scale of all colors</p>
            <p>Saturation - How dull or rich the color</p>
            <p>Brightness - Whether the color is closer to white or closer to black on the scale</p>
          </div>
          <div class="img">
            <img src="../assets/hsb.png" alt="hsb 颜色模型示例">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Next from './common/Next.vue'

export default defineComponent({
  name: 'ColorModels',
  components: {
    Next
  },
  data() {
    return {
      showCMYK: false,
      showRGB: false,
      showHSB: false
    }
  },
  methods: {
    toggleExpand(name: string) {
      switch(name) {
        case 'cmyk':
          this.showCMYK = !this.showCMYK
          this.showRGB = false
          this.showHSB = false
          break
        case 'rgb':
          this.showCMYK = false
          this.showRGB = !this.showRGB
          this.showHSB = false
          break
        case 'hsb':
          this.showCMYK = false
          this.showRGB = false
          this.showHSB = !this.showHSB
          break
        default:
          this.showCMYK = false
          this.showRGB = false
          this.showHSB = false
      }
    }
  }
})
</script>

<style lang="less" scoped>
.cyan-colored {
  color: cyan;
}

.magenta-colored {
  color: magenta;
}

.yellow-colored {
  color: yellow;
}

.red-colored {
  color: red;
}

.blue-colored {
  color: blue;
}

.green-colored {
  color: green;
}

.strong {
  font-size: 1.05rem;
  font-weight: 900;
}


.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    height: 33%;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main {
    width: 100%;
    height: 67%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .section {
      display: flex;
      flex-direction: column;
      padding: 0 0 0 150px;
      .desc {
        display: flex;
        align-items: baseline;
        margin: 20px 0 50px 0;
        h2 {
          display: block;
          width: 8rem;
          cursor: pointer;
        }
      }
      .details {
        box-sizing: border-box;
        position: absolute;
        top: 25%;
        left: 0;
        background: #f6fdfc;
        width: 100%;
        height: 75%;
        padding: 48px 100px;
        transition: all 0.5s;
        .text {
          line-height: 4;
          float: left;
        }
        .img {
          float: right;
        }
      }
    }
  }
}
</style>
