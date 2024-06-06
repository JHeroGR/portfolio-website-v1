<template>
<i v-if=isDark class="bi bi-toggle-off" @click="toggleDark()" style="font-weight:bold; font-size:xx-large;"></i>
<i v-else class="bi bi-toggle-on" @click="toggleDark()" style="font-weight:bold; font-size:xx-large;"></i>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="out-in">
      <div :key="route.name">  
          <Component :is="Component"></Component>
        </div>
    </transition>
  </router-view>

</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style>
#app {
  font-family: 'Tahoma', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active {
  transition: 0.5s ease-out;
}
.dark {
  background: #16171d; 
  color: #fff;
}
</style>
