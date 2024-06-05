<template>
    <div class="main bg-primary">
        <div class="container">
            <router-link to="/"><i class="bi bi-chevron-left" style="color: black;font-weight: bold;font-size:xx-large;"></i></router-link>
            <h1>JHero</h1>
            <h3>Actor</h3>
            <div class="row">
                <div class="col-md-6">
                    <carousel :autoplay="5000" :wrap-around="true" :items-to-show="1">
                        <slide v-for="image in images" :key="image.id">
                            <div class="carousel__item">
                                <div class="carousel__slide">
                                    <img :src="require(`@/assets/${image.filename}`)" alt="">
                                </div>
                                <br>
                                <p>{{ image.project_name }}</p>
                                <p>{{ image.project_role }}</p>
                            </div>

                        </slide>

                        <template #addons>
                            <navigation />
                        </template>
                    </carousel>
                </div>
                <div class="col-md-6">
                    <img class="resume" src="../assets/actor_resume2024.png" alt="Resume">
                    <div class="btn-container">
                        <div class="d-grid gap-2">
                            <a href="https://resumes.actorsaccess.com/JHeroYT" class="btn btn-secondary btn-block" type="button">Actors Access</a>
                            <a to="../assets/actor_resume2024.png" class="btn btn-secondary btn-block" type="button" download="Joel Gutierrez - Actor Resume">Download Resume</a>
                        </div>

                    </div>
                        
                </div>
            </div>
        </div>
    </div>
    <Socials />
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { db } from '../firebase'
import { getDatabase, ref, child, get } from 'firebase/database'
import Socials from '../views/Socials.vue'

export default {
  name: 'Actor',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Socials
  },
  data() {
    return {
        images: []
    }
  },
  methods: {
    async getImages() {
        const dbRef = ref(getDatabase())

        get(child(dbRef, 'images')).then((snapshot) => {
                if (snapshot.exists()) {
                    this.images = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })    
        }
  },
  mounted() {
    this.getImages()
  }
}
</script>

<style scoped>
.main {
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
.main .btn-container {
    padding-bottom: 20px;
}
.main h1 {
    text-align: center;
}
.main h3, .main .btn {
    text-align: center;
    font-weight: bold;
}
.main .btn {
    border: 1px solid black;
}
.main .carousel {
    margin: 5% auto 5% auto;
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
    margin-top: 20px;
    margin-bottom: 50px;
}
.main .carousel__item h5 {
    margin: 5px;
    margin-top:10px;
}
</style>