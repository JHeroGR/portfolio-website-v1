<template>
    {{  database }}
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
                                    <div class="row align-items-center">
                                        <div class="col">     
                                            <ul>
                                                <div v-for="lang in languages" :key="lang.id">
                                                    <li v-if="lang.category=='language'">{{ lang.name }}</li>
                                                </div>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <div v-for="lang in languages" :key="lang.id">
                                                    <li v-if="lang.category=='framework'">{{ lang.name }}</li>
                                                </div>
                                            </ul>
                                        </div>
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
                                        <p>Education</p>
                                        <div v-for="acv in achievements" :key=acv.id>
                                            <div v-if="acv.category!='Certification'">
                                                <ul>
                                                    <li>{{  acv.degree }}, {{ acv.school }} ({{ acv.grad_year }})</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr>
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
                                    <div class="row">
                                        <div class="col">
                                            <div v-for="tool in tools" :key="tool.id">
                                                <div v-if="tool.category=='programming'">
                                                    <ul>
                                                        <li>{{ tool.name }}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div v-for="tool in tools" :key="tool.id">
                                                <div v-if="tool.category=='editing'">
                                                    <ul>
                                                        <li>{{ tool.name }}</li>
                                                    </ul>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="skills" class="panel panel-default">
                                    <div class="panel-heading">Skills</div>
                                    <div class="panel-body">
                                        <ul>
                                            <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="d-grid gap-2 d-md-block">
                    <RouterLink to="https://github.com/JHeroGR" class="btn btn-secondary" type="button">GitHub</RouterLink>
                    <RouterLink to="/" class="btn btn-secondary" type="button">Download Resume</RouterLink>
                </div>

            </div>
            

        </div>
        <Socials />
    </div>
</template>

<script>
import { db } from '../firebase'
import { getDatabase, ref, child, get } from 'firebase/database'

export default {
    name: 'Coder',
    data() {
        return {
            jobs: [],
            projects: [],
            langauges: [],
            tools: [],
            achievements: [],
            skills:[]
        }
    },
    methods: {
        async getJobs(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'jobs')).then((snapshot) => {
                if (snapshot.exists()) {
                this.jobs = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async getProjects(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'projects')).then((snapshot) => {
                if (snapshot.exists()) {
                this.projects = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async getLanguages(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'languages')).then((snapshot) => {
                if (snapshot.exists()) {
                this.languages = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async getTools(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'tools')).then((snapshot) => {
                if (snapshot.exists()) {
                this.tools = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async getAchievements(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'achievements')).then((snapshot) => {
                if (snapshot.exists()) {
                this.achievements = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        async getSkills(db) {
            const dbRef = ref(getDatabase())

            get(child(dbRef, 'skills')).then((snapshot) => {
                if (snapshot.exists()) {
                this.skills = snapshot.val()
                } else {
                console.log('no data')
                }
            }).catch((error) => {
                console.log(error)
            })        
        }          
    },
    mounted() {
        this.getJobs(db),
        this.getProjects(db),
        this.getLanguages(db),
        this.getTools(db),
        this.getAchievements(db),
        this.getSkills(db)
    }
}
    // data() {
    //     return {
    //         jobs: [],
    //         projects: [],
    //         achievements: [],
    //         languages: [],
    //         tools: [],
    //     }
    // },
    // mounted() {

        // fetch('http://localhost:3000/jobs')
        // .then((res) => res.json())
        // .then(data => this.jobs = data)
        // .catch(err => console.log(err.message))

        // fetch('http://localhost:3000/projects')
        // .then((res) => res.json())
        // .then(data => this.projects = data)
        // .catch(err => console.log(err.message))

        // fetch('http://localhost:3000/achievements')
        // .then((res) => res.json())
        // .then(data => this.achievements = data)
        // .catch(err => console.log(err.message))
    
        // fetch('http://localhost:3000/languages')
        // .then((res) => res.json())
        // .then(data => this.languages = data)
        // .catch(err => console.log(err.message))

        // fetch('http://localhost:3000/tools')
        // .then((res) => res.json())
        // .then(data => this.tools = data)
        // .catch(err => console.log(err.message))

    // }

</script>

<style scoped>
.main {
    background: #FFE55D;
    width: 100%;
}
.main h1 {
    text-align: center;
}
.main h3, .main .btn {
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    font-weight: bold;
}
.main .d-md-block {
    padding-bottom: 20px;
}
.main .btn {
    border: 1px solid black;
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