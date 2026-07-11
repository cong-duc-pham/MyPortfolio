import React from 'react';
import { X, Cpu, Layers, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content terminal-card" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot red" onClick={onClose} style={{ cursor: 'pointer' }}></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
          </div>
          <span className="terminal-title">inspect_project.sh - {project.filename}</span>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={16} />
          </button>
        </div>

        <div className="modal-inner-scroll">
          <div className="modal-header">
            <span className="modal-category-tag">{project.categoryLabel}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>

          <div className="modal-body">
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Cpu size={18} /> Công nghệ sử dụng
              </h4>
              <div className="modal-tech-list">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="modal-tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">
                <CheckCircle size={18} /> Các tính năng chính
              </h4>
              <ul className="modal-features-list">
                {project.details.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <h4 className="modal-section-title">
                <Layers size={18} /> Giải pháp kỹ thuật & Kiến trúc
              </h4>
              <ul className="modal-architecture-list">
                {project.details.solutions.map((sol, idx) => (
                  <li key={idx}>{sol}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
