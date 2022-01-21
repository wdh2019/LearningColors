<template>
  <div class="wrapper" @click="goToLink()">
    <div class="outter-dot">
      <div class="inner-dot"></div>
    </div>
    <div class="text">下一页</div>
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

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.outter-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  transition: all 0.5s;
  cursor: pointer;
  .inner-dot {
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: all 0.5s;
    transform: scale(0.5)
  }
}

.text {
  font-size: 0.5rem;
  font-weight: 900;
  line-height: 2;
  opacity: 0;
  transition: opacity 0.5s;
}

.outter-dot:hover {
  .inner-dot {
    transform: scale(0.7);
  }
  ~ .text {
    opacity: 1;
  }
}

</style>
