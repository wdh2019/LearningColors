<template>
  <div class="wrapper" @click="goToLink()">
    <div class="dot"></div>
    <div class="text">下一张</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Next',
  props: {
    href: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToLink() {
      this.$router.push(this.href)
    }
  }
})

</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dot {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  transition: all 0.5s;
  cursor: pointer;
}

.dot:after {
  content: '';
  background: gray;
  position: absolute;
  top: 4px;
  left: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.dot:hover {
  opacity: 0.8;
}

.text {
  opacity: 0;
  transition: opacity 0.5s;
}

.dot:hover ~ .text {
  opacity: 1;
}
</style>
