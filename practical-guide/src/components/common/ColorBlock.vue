<template>
  <div
    :class="`wrapper${isActive ? '-active' : ''}`"
    :style="`width:${(isActive ? width * 3 : width) + 'px'};height:${height + 'px'};${borderRadius}`"
    @mouseenter="toggleActive"
    @mouseleave="toggleActive"
  >
    <div
      class="color-block"
      :style="`background: #${hex}`"
    >
      <div
        class="color-hex"
        :style="`color:#${textColor};`">
          {{ hex }}
      </div>
      <div
        class="color-marker-dot"
        v-show="dotted"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ColorBlock',
  props: {
    width: {
      type: Number,
      default: 75,
    },
    height: {
      type: Number,
      default: 100,
    },
    hex: {
      type: String,
      default: '000',
    },
    textColor: {
      type: String,
      default: 'fff',
    },
    borderRadius: {
      type: String,
      default: '',
    },
    dotted: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive 
    }
  }
})

</script>

<style scoped>
.wrapper {
  overflow: hidden;
  transition: width 0.5s ease;
}

.wrapper-active {
  overflow: hidden;
  transition: width 0.5s ease;
}

.color-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.wrapper-active > .color-block .color-hex {
  display: block;
}

.wrapper-active > .color-block .color-marker-dot {
  display: none;
}

.color-hex {
  display: none;
  text-align: center;
}

.color-marker-dot {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
}
</style>
