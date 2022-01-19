<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style>
@import url('https://fonts.font.im/css?family=Poppins:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
