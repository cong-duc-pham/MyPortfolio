import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowRight, Download } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const Github = ({ size = 22, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  const words = ['Fullstack Developer', 'C# / .NET Developer', 'React / JavaScript Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Xin chào! Mình là</span>
          <h1 className="hero-name">PHẠM CÔNG ĐỨC</h1>
          <div className="hero-typing-container">
            <span className="hero-typing-prefix">Một </span>
            <span className="hero-typing-text">{currentText}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-description">
            Nhà phát triển Fullstack với kinh nghiệm xây dựng ứng dụng Web/Mobile có khả năng mở rộng cao,
            thiết lập các đường ống dữ liệu thời gian thực (real-time) sử dụng C# (.NET) và React/JavaScript.
            Có khả năng làm việc tốt với Kiến trúc hướng sự kiện (Event-driven), SignalR (WebSockets) và
            quản trị cơ sở dữ liệu doanh nghiệp (SQL Server).
          </p>

          <div className="hero-actions">
            <button onClick={handleScrollToContact} className="btn-primary">
              Liên hệ với mình <ArrowRight size={18} />
            </button>
            <a 
              href="mailto:pamcongduc20102005@gmail.com" 
              className="btn-secondary"
            >
              Xem Email <Mail size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/cong-duc-pham" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="mailto:phamcongduc20102005@gmail.com" className="social-icon-link" aria-label="Email">
              <Mail size={22} />
            </a>
            <a href="tel:0378372031" className="social-icon-link" aria-label="Phone">
              <Phone size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrapper">
            <img src={avatarImg} alt="Phạm Công Đức" className="avatar-img" />
            <div className="avatar-glow-ring"></div>
          </div>

          {/* Coder Terminal Mock */}
          <div className="hero-terminal terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">bash - phamcongduc@utc2</span>
            </div>
            <div className="hero-terminal-body">
              <div className="hero-terminal-line">
                <span className="hero-terminal-input">phamcongduc@UTC2-HCMC:~$</span> npm init -y
              </div>
              <div className="hero-terminal-line">
                <span className="hero-terminal-output">Wrote to c:/portfolio/package.json</span>
              </div>
              <div className="hero-terminal-line">
                <span className="hero-terminal-input">phamcongduc@UTC2-HCMC:~$</span> cat skills.json
              </div>
              <div className="hero-terminal-line hero-terminal-comment">
                {"// Specialities: C#/.NET Core, React, SignalR, SQL Server"}
              </div>
              <div className="hero-terminal-line">
                <span className="hero-terminal-input">phamcongduc@UTC2-HCMC:~$</span> <span className="hero-terminal-output">echo "Ready to code!"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
