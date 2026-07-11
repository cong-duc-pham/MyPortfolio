import React from 'react';
import { Code, Layout, Server, Database, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Ngôn ngữ lập trình',
      filename: 'languages.txt',
      icon: <Code size={24} />,
      skills: ['JavaScript (ES6+)', 'C#', 'Java', 'Dart', 'C++'],
    },
    {
      title: 'Phát triển Front-end',
      filename: 'frontend.json',
      icon: <Layout size={24} />,
      skills: ['React (Hooks, Context API)', 'Tailwind CSS', 'HTML5 & CSS3', 'Flutter', 'WinForms'],
    },
    {
      title: 'Back-end & Real-time',
      filename: 'backend.config',
      icon: <Server size={24} />,
      skills: ['ASP.NET Core Web API', 'SignalR (WebSockets)', 'Node.js', 'RESTful API'],
    },
    {
      title: 'Cơ sở dữ liệu & ORM',
      filename: 'database.sql',
      icon: <Database size={24} />,
      skills: ['SQL Server', 'MySQL', 'Entity Framework Core'],
    },
    {
      title: 'Công cụ & DevOps',
      filename: 'devops.yml',
      icon: <Settings size={24} />,
      skills: ['GitHub', 'Docker', 'Swagger', 'Firebase', 'Jira & Trello', 'Kafka'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Kỹ năng chuyên môn</h2>
        <div className="section-divider"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-card terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">{category.filename}</span>
            </div>
            <div className="terminal-body">
              <div className="skills-card-header">
                <div className="skills-card-icon">{category.icon}</div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
