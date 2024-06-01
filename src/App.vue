<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mod="out-in">
      <div :key="route.name">  
          <component :is="Component"></component>
        </div>
    </transition>
    <Socials />
  </router-view>

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
.slide-enter-active, .slide-leave-active {
   transition: 300ms;

  }
 .slide-enter-to{
    position: relative;
    left: 0;
 }
 .slide-leave{
    position: absolute;
  }
 .slide-enter {
    left: -100vw;
    position: absolute;
  }
 .slide-leave-to {
    right: -100vw;
 }
 </style>
