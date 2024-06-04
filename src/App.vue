<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="out-in">
      <div :key="route.name">  
          <Component :is="Component"></Component>
        </div>
    </transition>
  </router-view>

</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
body {
  background: #FFFF;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active {
  transition: 0.5s ease-out;
}

</style>
