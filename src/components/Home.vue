<template>
  <div>
    <Main />
    
    <Talents />
    
    <Updates />
    
    <Contact />
    
    <Socials />
  </div>
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

</style>
