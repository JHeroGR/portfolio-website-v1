<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide" mode="out-in">
      <div :key="route.name">  
          <Component :is="Component"></Component>
        </div>
    </transition>
  </router-view>

</template>

<script setup>

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
</style>
