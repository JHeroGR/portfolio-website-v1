<template>
  <h1>JHero</h1>
  <h3>Actor | Gamer | Coder</h3>

  <div class="row">
    <div class="col-md-6">
      <Main />
    </div>
    <div class="col-md-6">
      <Talents />
    </div>
  </div>

    <Updates />
    
    <Contact />
    
    <Socials />
</template>

<script>
import Main from './Main.vue'
import Talents from './Talents.vue'
import Contact from './Contact.vue'
import Updates from './Updates.vue'
import Socials from '../views/Socials.vue'

export default {
  name: 'Home',
  components: {
    Main,
    Talents,
    Contact,
    Updates,
    Socials
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h3 {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
}
.row {
  background-color: #59db5e;
  text-align: center;
  margin-right: 0;
}
</style>
