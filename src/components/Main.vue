<template>
    <div class="main">
      <h1>JHero</h1>
      <h3>Actor | Gamer | Coder</h3>
      <img src="../assets/headshot2024.jpg" alt="">
    </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1, h3 {
  text-align: center;
}
img {
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>