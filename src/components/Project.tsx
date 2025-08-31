import React, { useState } from "react";
import projectsData from "../assets/content/project.json";
import "../assets/styles/Project.scss";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projectsData.map(p => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(cat => (
          <Button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.link} target="_blank" rel="noreferrer" className="image-link">
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
              />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>

            {/* Tech Chips */}
            <div className="flex-chips">
              <span className="chip-title">Tech:</span>
              {project.tech?.map((t, i) => (
                <Chip key={i} className="chip" label={t} />
              ))}
            </div>

            {/* Methods Chips */}
            <div className="flex-chips">
              <span className="chip-title">Methods:</span>
              {project.methods?.map((m, i) => (
                <Chip key={i} className="chip" label={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
