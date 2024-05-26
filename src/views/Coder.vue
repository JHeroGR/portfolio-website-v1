<template>
    <div class="main">
        <router-link to="/"><i class="fa fa-angle-left" style="font-size:50px;"></i></router-link>
        <h1>JHero</h1>
        <h3>Coder</h3>

        <div class="resume-cards">
            <div class="row">
                <div class="col-md-8">
                    <div class="panel">
                        <div class="panel-body">
                            Basic panel example
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel">
                        <div class="panel-body">
                            Basic panel example
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <button>GitHub</button>
        <button>Download Resume</button>
    </div>
</template>

<style scoped>
.main {
    background: #FFE55D;
}
.main h1 {
    text-align: center;
}
.main h3, .main button {
    font-family: 'Courier New', Courier, monospace;
    font-size: medium;
    text-align: center;
    font-weight: bold;
}
.main button {
    width: 100%;
    padding: 12px;
    border: 1px solid;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background: #D9D9D9;
}
.topblack {
    border-top: black;
}
</style>