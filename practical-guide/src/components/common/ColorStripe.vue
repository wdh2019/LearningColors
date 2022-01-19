<template>
  <div class="color-stripe">
    <div
      v-for="(hex, index) in colorHexs"
      :key="index">
      <ColorBlock
        :hex="hex"
        :textColor="textColors && textColors[index]"
        :borderRadius="computeStyles(index)"
        :dotted="originColor === hex"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ColorBlock from './ColorBlock.vue'

export default defineComponent({
  name: 'ColorStripe',
  components: {
    ColorBlock
  },
  props: {
    colorHexs: {
      type: Array as PropType<string[]>,
      required: true
    },
    textColors: {
      type: Array as PropType<string[]>,
    },
    originColor: {
      type: String,
      default: ''
    }
  },
  methods: {
    computeStyles(index: number) {
      if (index === 0) { // 第一个色块
        return 'border-radius: 5px 0 0 5px;'
      } else if (index === this.colorHexs.length - 1) { // 最后一个色块
        return 'border-radius: 0 5px 5px 0;'
      }
      return ''
    }
  }
})

</script>

<style scoped>
.color-stripe {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
}

</style>
