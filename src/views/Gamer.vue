<template>
  <div class="main">
    <div class="container">
      <router-link to="/"><i class="bi bi-chevron-left"
          style="color: black; font-weight: bold; font-size: xx-large"
        ></i
      ></router-link>
      <h1>JHero</h1>
      <h3>Gamer</h3>

      <h3>Full-Length Videos</h3>

      <div class="image-list-container">
        <ul>
          <li v-for="fullVideo in fullVideos" :key="fullVideo.id">
            <a :href="'https://www.youtube.com/watch?v=' + fullVideo.id"><img :src=fullVideo.thumbnail></a>
          </li>
        </ul>
      </div>
    </div>
    <Socials />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullVideos: []
    };
  },
  mounted() {
    this.getYouTubeVideos()
  },
  methods: {
    async getYouTubeVideos() {
      try {
        const apikey = process.env.VUE_APP_YOUTUBE_API_KEY
        const channelId = process.env.VUE_APP_YOUTUBE_CHANNEL_ID
        
        const responseFull = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apikey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5&type=video&eventType=completed`
        )
        
        const fullVideosData = await responseFull.json()

        this.fullVideos = fullVideosData.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url
        }))

        console.log(this.fullVideos)

      } catch (error) {
        console.error("Error fetching videos:", error)
      }
    },
  },
}
</script>

<style scoped>
.main {
  background: #ff5d5d;
  width: 100%;
}
.main h1 {
  text-align: center;
}
.main h3 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  font-weight: bold;
}
.main .image-list-container {
  text-align: center;
  margin-bottom: 10px;
}
.main ul {
  list-style: none;
  padding: 0;
}
.main li {
    text-decoration: none;
    display: inline-flex;
    margin: 10px;
}
.main li img {
  border-radius: 5px;
}
.main li img:hover {
  box-shadow: 1px 1px 1px 5px black;
}
</style>
