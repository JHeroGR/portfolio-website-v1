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
                                    <div>
                                        <p>Invoice Cloud, Software Engineer QA/SDET (December 2019 - September 2023)</p>
                                        <ul>
                                            <li>Enhanced, implemented and maintained our own Framework for 100+ scenarios and scripts both manual
                                                and automated cases, using C#, with Specflow Framework and ran with Selenium Webdriver.</li>
                                            <li>Modernized legacy Python and C# test scripts to transition them into new Specflow Cucumber tests using
                                                Visual Studio Code, and executed continuous tests for both legacy and new test suites in Azure DevOps
                                                Pipelines.</li>
                                            <li>Written and logged over 100+ scenarios in Framework while keeping consistent with JIRA XRays for test
                                                case and coverage.</li>
                                            <li>Tested current and upcoming features with both manual and automation scenarios, to detect for potential Bug
                                                Defects or changes in both UI and Database Systems. Using Visual Studio with C#.
                                                </li>
                                        </ul>

                                        <p>Edinburg CISD, Technology Internship (December 2018 - October 2019)</p>
                                        <ul>
                                            <li>Replaced faulty computer parts with new ones for computer systems and hardware-related issues.</li>
                                            <li>Configured and set up computer systems for co-workers, students, and fellow employees, ensuring they
                                            have the necessary tools to perform their tasks.</li>
                                            <li>Created banners and web page layouts for promotional activities of school companies, including STAAR
                                            and TEA programs, using Adobe Photoshop for image editing and Adobe Illustrator for image creations.</li>
                                        </ul>

                                        <p>The University of Texas Rio Grande Valley, Lab Consultant (June 2018 - August 2018)</p>
                                        <ul>
                                            <li>Graded student’s final examinations.</li>
                                            <li>Supervised Computer Science Laboratory and mentored students with debugging issues and verifications
                                            in their programming projects.</li>
                                        </ul>

                                        <p>Kemper Insurance, Analyst Developer Intern (August 2017 - March 2018)</p>
                                        <ul>
                                            <li>Developed automated scripts for faster access to data files stored in websites. Implemented in Python,
                                            automated with Selenium.</li>
                                            <li>Developed macros for analysis reports for sales analytics for the company. Implemented in VBA for
                                            Microsoft Office.</li>
                                            <li>Developed an automation program that takes in PDF application forms and exports them in CSV file
                                            formats for lighter file storage safekeeping. Implemented in Python, C#.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="projects" class="panel panel-default">
                                <div class="panel-heading">Projects</div>
                                <div class="panel-body">
                                    <p>Portfolio Website</p>
                                    <ul>
                                        <li>Designed mobile version of this Website with Figma</li>
                                        <li>Creating mobile version with VueJS</li>
                                    </ul>
                                    <p>Jojama Properties Website</p>
                                    <ul>
                                        <li>Designing and developing a web app for a real estate company in Python and AWS support for image
                                        storage.</li>
                                    </ul>
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
                                        <p>Education</p>
                                        <ul>
                                            <li>Bachelor's of Science In Computer Engineering, University Of Texas - Rio Grande Valley (Class of 2019)</li>
                                        </ul>
                                        <p>Certifications</p>
                                        <ul>
                                            <li>Foundations of the User Experience (UX) Design, Google-Coursera (February 2024)</li>
                                            <li>Start the UX Design Process: Empathize, Define, and Ideate, Google-Coursera (April 2024)</li>
                                            <li>Build Wireframes and Low-Fidelity Prototypes, Google-Coursera (May 2024)</li>
                                        </ul>
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