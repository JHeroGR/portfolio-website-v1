<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="bi bi-chevron-left" style="color: black;font-weight: bold;font-size:xx-large;"></i></router-link>
            <h1>JHero</h1>
            <h3>Actor</h3>

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/hectorsaturnobueno.png" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Hector "Saturno" Bueno</h5>
                            <p>Escapando De Las Tinieblas</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/madhatterteaparty.png" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Mad Hatter</h5>
                            <p>Alicia</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/betotcc.png" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Beto</h5>
                            <p>A Tejano Christmas Carol</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

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
    margin: auto;
    width: 75%;
    padding-bottom: 10px;
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
</style>