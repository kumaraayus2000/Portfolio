import React from 'react';
import './ProjectSection.css';

const projects = [
    {
        title: 'FixFinder Platform',
        description: 'Web platform using React, Redux, and Node.js to book local service providers.',
        tools: ['React', 'Redux', 'Node.js', 'MongoDB'],
        link: 'https://github.com/info-6150-fall-2024/final-project-syntaxsquad'
    },
    {
        title: 'FIFA Betting Simulator',
        description: 'Betting simulator using Spring Boot and PostgreSQL with secure authentication.',
        tools: ['Spring Boot', 'React', 'PostgreSQL'],
        link: 'https://github.com/CSYE6200-Fall24-OOD/final-project-soccerbest_group11'
    }
];

function ProjectsSection() {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div className={`project-card project-${idx}`} key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="tools">{project.tools.join(' • ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project ↗</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
