<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="fa fa-angle-left" style="font-size:50px;color:black;"></i></router-link>
            <h1>JHero</h1>
            <h3>Actor</h3>

            <img src="../assets/resume2024.png" alt="Resume">

            <a href="https://resumes.actorsaccess.com/JHeroYT" class="button">Actors Access</a>
            <a href="/" class="button">Download Resume</a>

        </div>
    </div>
</template>

<style scoped>
.main {
    background: #5da6ff;
    width: 100%;
}
.main img {
    display: block;
    margin: 0 auto 0 auto;
    width: 75%;
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
</style>