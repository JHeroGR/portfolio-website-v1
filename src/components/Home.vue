<template>
  <div>
    <Test />

    <Main />
    
    <Talents />
    
    <Updates />
    
    <Contact />
    
  </div>
</template>

<script>
import Main from './Main.vue'
import Talents from './Talents.vue'
import Contact from './Contact.vue'
import Updates from './Updates.vue'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Main,
    Talents,
    Contact,
    Updates,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
