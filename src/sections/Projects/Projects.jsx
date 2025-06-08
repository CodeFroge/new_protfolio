import React from "react";
import "./Projects.scss";

const projects = [
    {
        title: "Portfolio Website",
        description: "A fully animated, responsive portfolio built with React, Vite, and SCSS.",
        tech: ["React", "SCSS", "Vite"],
        link: "https://your-portfolio-link.com",
        github: "https://github.com/yourusername/portfolio"
    },
    {
        title: "Task Manager App",
        description: "A full-stack MERN application for managing daily tasks with authentication and user roles.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        link: "https://your-task-app.com",
        github: "https://github.com/yourusername/task-manager"
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">Projects</h2>
                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ul className="tech-list">
                                {project.tech.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    Live Site
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
