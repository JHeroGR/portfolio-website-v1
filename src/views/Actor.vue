<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="bi bi-chevron-left" style="color: black;font-weight: bold;font-size:xx-large;"></i></router-link>
            <h1>JHero</h1>
            <h3>Actor</h3>
            <carousel :autoplay="5000" :wrap-around="true" :items-to-show="1">
                <slide v-for="image in images" :key="image.id">
                <div class="carousel__item">
                    <div class="carousel__slide">
                    <img :src="require(`@/assets/${image.filename}`)" alt="">
                    </div>
                </div>

                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>

            

            <img class="resume" src="../assets/resume2024.png" alt="Resume">

            <a href="https://resumes.actorsaccess.com/JHeroYT" class="button">Actors Access</a>
            <a href="../assets/resume2024.png" class="button" download="Joel Gutierrez - Actor Resume">Download Resume</a>

        </div>
    </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
        images: []
    }
  },
  mounted() {
    fetch("http://localhost:3000/images")
    .then((res) => res.json())
    .then(data => this.images = data)
    .catch(err => console.log(err.message))

  }
}
</script>

<style scoped>
.main {
    background: #5da6ff;
    width: 100%;
}
.main img {
    display: block;
    margin: auto;
    width: 75%;
    padding-bottom: 0;
    /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color]; */
    box-shadow: 0 0 5px 0 black;
}
.main h1 {
    text-align: center;
}
.main h3, .main .button {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-weight: bold;
}
.main .button {
    width: 100%;
    padding: 12px;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background: #D9D9D9;
    display: inline-block;
    color: black;
}
.main .carousel {
    margin: 10px auto;
    overflow: hidden;
}
.main .carousel {
    flex: 0 0 100%;
    overflow: hidden;
}
.main .carousel-item img {
    width: 75%;
    object-fit: cover; /* Crop images to fit container */
    height: 250px; /* Set height as needed */
}
.main .carousel-item h5, .main .carousel-item p {
    text-shadow: 3px 3px 3px black;
}
.main a {
    text-decoration: none;
}
.main .resume {
    margin-top: 30px;
    margin-bottom: 10px;
}
.main .carousel__item h5 {
    margin: 5px;
    margin-top:10px;
}
</style>