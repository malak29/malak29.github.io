import React from "react"
import '../assets/styles/Project.scss'

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href=" https://github.com/malak29/iam-express-app" target="_blank" rel="noreferrer"><img src={"https://github.com/malak29/iam-express-app/raw/master/out/plantuml/Architecture_diagram/Architecture_diagram.png?raw=true"} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href=" https://github.com/malak29/iam-express-app" target="_blank" rel="noreferrer"><h2>IAM Express API</h2></a>
                <p>Developed a comprehensive role-based authentication and authorization REST API using Node.js, TypeScript, Express, and JWT. Features multi-department user management, secure authentication middleware, input validation with Zod schemas, and Docker containerization for production deployment.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;