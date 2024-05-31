<template>
    <div class="main">
        <div class="container">
            <router-link to="/"><i class="bi bi-chevron-left" style="color: black;font-weight: bold;font-size:xx-large;"></i></router-link>
            <h1>JHero</h1>
            <h3>Coder</h3>

            <div class="resume-cards">
                <div class="row">
                    <div class="col-md-8">
                        <div class="panel-group">
                            <div id="work-experience" class="panel panel-default">
                                <div class="panel-heading">Work Experience</div>
                                    <div class="panel-body">
                                        <div v-for="job in jobs" :key="job.id">
                                            <p>{{ job.company }}, {{ job.title }} ({{ job.date }})</p>
                                            <ul>
                                                <li v-for="exp, index in job.experience" :key="index">{{ exp }}</li>
                                            </ul>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                            <div id="projects" class="panel panel-default">
                                <div class="panel-heading">Projects</div>
                                <div class="panel-body">
                                    <div v-for="project in projects" :key="project.id">
                                        <p>{{ project.title }}</p>
                                        <ul>
                                            <li v-for="exp, index in project.experience" :key="index">{{ exp }}</li>
                                        </ul>
                                        <hr>
                                    </div>
                                </div>
                            </div>
                            <div id="lang-and-frames" class="panel panel-default">
                                <div class="panel-heading">Language and Frameworks</div>
                                <div class="panel-body">
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Python</li>
                                            <li>C#</li>
                                            <li>HTML / CSS / JavaScript</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Selenium</li>
                                            <li>Flask</li>
                                            <li>VueJS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="panel-group">
                            <div id="achievements" class="panel panel-default">
                                <div class="panel-heading">Achievements</div>
                                    <div class="panel-body">
                                        <div v-for="acv in achievements" :key=acv.id>
                                            <div v-if="acv.category!='Certification'">
                                                <p>{{ acv.category }}</p>
                                                <ul>
                                                    <li>{{  acv.degree }}, {{ acv.school }} ({{ acv.grad_year }})</li>
                                                </ul>
                                                <hr>
                                            </div>
                                        </div>
                                        <p>Certification</p>
                                        <div v-for="acv in achievements" :key="acv.id">
                                            <div v-if="acv.category=='Certification'">
                                                <ul>
                                                    <li>{{ acv.degree }}, {{  acv.school }} ({{ acv.grad_year }})</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr>
                                </div>
                            </div>
                            <div id="tools" class="panel panel-default">
                                    <div class="panel-heading">Tools</div>
                                    <div class="panel-body">
                                        <ul>
                                            <li>Visual Studio Code / Visual Studio</li>
                                            <li>Figma</li>                              
                                        </ul>
                                        <ul>
                                            <li>Premiere Pro / Davinci Resolve</li>
                                            <li>Git / GitHub</li>  
                                        </ul>
                                    </div>
                            </div>
                            <div id="skills" class="panel panel-default">
                                    <div class="panel-heading">Skills</div>
                                    <div class="panel-body">
                                        <ul>
                                            <li>Automation</li>
                                            <li>UI Design</li>
                                            <li>Web App Development</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <a href="https://github.com/JHeroGR" class="button">GitHub</a>
            <a href="/" class="button">Download Resume</a>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [],
            projects: [],
            achievements: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then((res) => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))

        fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))

        fetch('http://localhost:3000/achievements')
        .then((res) => res.json())
        .then(data => this.achievements = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
.main {
    background: #FFE55D;
    width: 100%;
}
.main h1 {
    text-align: center;
}
.main h3, .main .button {
    font-family: 'Courier New', Courier, monospace;
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
.main .panel-default {
    margin: 10px;
    border: black solid 1px;
    border-radius: 5px;
}
.main .panel-heading {
    background: black;
    color: white;
    padding: 10px 7px;
    border-radius: 3px 3px 0 0;
}
.main .panel-body {
    background: white;
    padding: 10px 7px;
    border-radius: 0 0 3px 3px;
}
.main p {
    margin: 0 10px;
}
.main #tools ul, .main #lang-and-frames ul {
    margin-bottom: 0;
}
.main a {
    text-decoration: none;
}
</style>