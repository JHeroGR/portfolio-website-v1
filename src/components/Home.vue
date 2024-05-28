<template>
  <div>
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <!-- <div class="main">
      <h1>JHero</h1>
      <h3>Actor | Gamer | Coder</h3>
      <img src="../assets/headshot2024.jpg" alt="">
    </div> -->
    <Main />
    <!-- <div class="talents">
      <h3>Welcome In!</h3>
      <p>I am JHero, I am an actor, gamer, and coder.</p>
      <p>Feel free to explore who I am and what I love doing!</p>
      <ul>
        <li><RouterLink to="/actor">Actor Resume</RouterLink></li>
        <li><RouterLink to="/gamer">Gamer Things</RouterLink></li>
        <li><RouterLink to="/coder">Coder Portfolio</RouterLink></li>
      </ul>
    </div> -->
    <Talents />
    <!-- <div class="updates">
      <h3>Where Is JHero Now?</h3>
      <p>Currently JHero is part of a play called Burritos Pa' Morrir at South Texas College in support of the STXLNPF (South Texas Latinos New Play Festival).</p>      <p>Play will be running on June 28-29</p>
    </div> -->
    <Updates />
    <!-- <div class="contact">
      <h3>LET'S CONNECT!</h3>
      <p>Hit Me Up And We'll Keep In Touch!</p>
      <p>Email: <a href="mailto:jheroytc@gmail.com">jheroytc@gmail.com</a></p>
      <p>Phone: <a href="tel:+9568679183">(956) 867-9183</a></p>
      <form action="">
        <input type="email" id="email" name="email" placeholder="Email">
        <input type="text" id="subject" name="subject" placeholder="Subject">
        <textarea id="message" name="message" placeholder="Message" style="height:200px"></textarea>
        <input type="submit" value="Send Email">
      </form>
    </div> -->
    <Contact />
    <!-- <div class="socials">
      <h3>Socials</h3>
      <ul>
        <li><a href="https://github.com/JHeroGR"><i class="fa fa-github"></i></a></li>
        <li><a href="https://twitter.com/JHeroGR"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://twitch.tv/JHeroGR"><i class="fa fa-twitch"></i></a></li>
        <li><a href="https://youtube.com/JHero"><i class="fa fa-youtube-play"></i></a></li>
      </ul>
    </div> -->
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
    Updates
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
/* h1, h3 {
  text-align: center;
}
img {
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
} */
/* .talents {
  background: #72FF78;
  width: 100%;
  padding: 5px 0 5px 0;
  margin-top: 10px;
}
.talents ul {
  padding: 0;
}
.talents a {
  color: white;
  background: black;
  display: block;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  margin: 20px;
  border-style:solid;
  border-color: white;
  border-radius: 12px;
}
.talents h3, .talents p {
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
} */
/* .updates {
  background: #FFC772;
  padding: 10px;
  text-align: center;
} */
/* .contact {
  text-align: center;
}
.contact a {
  text-decoration: none;
  color: black;
}
.contact input, .contact textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #717171;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  background: #b1b1b1;
}
::placeholder {
  color: black;
} */
/* .socials li {
  list-style-type: none;
  display: inline-block;
  margin-right: 6px;
  margin-left: 6px;
  font-size: 50px;
}
.socials li a {
  color: black;
} */
</style>
