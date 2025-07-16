import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application featuring user authentication, product catalog, shopping cart functionality, and secure payment processing. Built with modern React patterns and responsive design principles.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
      image: "🛒 E-Commerce Demo",
      githubLink: "https://github.com/alexjohnson/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Demonstrates proficiency in state management and API integration.",
      technologies: ["React", "JavaScript", "Firebase", "Bootstrap", "Chart.js"],
      image: "📋 Task Manager",
      githubLink: "https://github.com/alexjohnson/task-manager",
    }
  ];

  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6 mb-4">
              <div className="project-card h-100">
                <div className="project-image">
                  {project.image}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.githubLink} 
                      className="btn btn-outline-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github me-2"></i>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;