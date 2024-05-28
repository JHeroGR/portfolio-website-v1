<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view />
  <Socials />

</template>

<script>
import Home from './components/Home.vue'
import Socials from './views/Socials.vue'

export default {
  name: 'App',
  components: {
    Home,
    Socials,
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
