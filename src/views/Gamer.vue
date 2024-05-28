<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="bi bi-chevron-left" style="color: black;font-weight: bold;font-size:xx-large;"></i></router-link>
            <h1>JHero</h1>
            <h3>Gamer</h3>

            <h3>Most Popular Videos</h3>

            <ul>
                <li><a href="https://www.youtube.com/watch?v=bSnTWaJeJ6M"><img src="../assets/thumbnail.jpeg"></a></li>
                <li><a href="https://www.youtube.com/watch?v=bSnTWaJeJ6M"><img src="../assets/thumbnail.jpeg"></a></li>
                <li><a href="https://www.youtube.com/watch?v=bSnTWaJeJ6M"><img src="../assets/thumbnail.jpeg"></a></li>
                <li><a href="https://www.youtube.com/watch?v=bSnTWaJeJ6M"><img src="../assets/thumbnail.jpeg"></a></li>
            </ul>            
        </div>
    </div>
</template>

<style scoped>
.main {
background: #ff5d5d;
width: 100%;
}
.main h1 {
    text-align: center;
}
.main h3, .main .button {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
.main li {
    list-style-type: none;
    padding: 12px;
    display: block;
}
.main li a {
    margin-left: 50px;
}
.main li img {
    width: 75%;
}
</style>