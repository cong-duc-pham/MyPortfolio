import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', id: 'home' },
    { name: 'Giới thiệu', id: 'about' },
    { name: 'Kỹ năng', id: 'skills' },
    { name: 'Dự án', id: 'projects' },
    { name: 'Liên hệ', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleLinkClick('home')}>
          <span>&lt;</span>DucPham<span> /&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="navbar-mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
