import "./modal.css";
import { FaGithub } from "react-icons/fa"; // Instale: npm i react-icons

function Modal({ project, onClose }) {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        {/* Header */}
        <header className="modal-header">
          <h2 id="modal-title">{project.title}</h2>
        </header>

        {/* Body */}
        <div className="modal-body">
          <p className="project-desc">{project.fullDesc || project.desc}</p>
          
          <div className="stacks-section">
            <h3>Tecnologias Usadas</h3>
            <div className="stacks-grid">
              {project.stack.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="modal-footer">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label={`Ver projeto ${project.title} no GitHub`}
          >
            <FaGithub className="icon" />
            Veja no GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Modal;