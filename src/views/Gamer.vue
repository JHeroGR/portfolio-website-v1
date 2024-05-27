<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="fa fa-angle-left" style="font-size:50px;color:black;"></i></router-link>
            <h1>JHero</h1>
            <h3>Gamer</h3>
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
</style>