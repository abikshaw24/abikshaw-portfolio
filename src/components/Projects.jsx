import "./../styles/projects.css";
import { motion } from "framer-motion";
import { projects } from "../portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <div className="title-line"></div>
          <p>Some of the projects I've built using modern technologies.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((item, techIndex) => (
                    <span key={techIndex}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;