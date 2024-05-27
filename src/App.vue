<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
  /* margin-top: 60px; */
}
body {
  background: #FFFF;
}
</style>
