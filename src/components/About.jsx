import React from 'react';
import { BookOpen, Globe, MapPin, Mail, Phone, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">Giới thiệu bản thân</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-container">
        <div className="about-bio">
          <h3>Hành trình phát triển</h3>
          <p>
            Mình là một lập trình viên Fullstack đầy nhiệt huyết với nền tảng vững chắc trong phát triển ứng dụng web và di động.
            Mình tập trung nghiên cứu xây dựng các giải pháp phần mềm có hiệu năng cao, các hệ thống thời gian thực 
            (real-time processing) và tối ưu hóa hệ thống cơ sở dữ liệu.
          </p>
          <p>
            Với khả năng kết hợp nhuần nhuyễn giữa tư duy phân tích hệ thống (phục vụ cho backend C# .NET Core) 
            và cảm quan thẩm mỹ thiết kế trải nghiệm người dùng (phục vụ cho frontend React/Flutter), 
            mình mong muốn tạo ra những sản phẩm chất lượng cao, đem lại trải nghiệm mượt mà nhất cho người sử dụng.
          </p>
          <p>
            Mình luôn tích cực học hỏi các công nghệ mới, đặc biệt là kiến trúc hệ thống hướng sự kiện, hệ thống hàng đợi 
            như Kafka, và ứng dụng trí tuệ nhân tạo vào nâng cao trải nghiệm ứng dụng.
          </p>
        </div>

        <div className="about-cards">
          {/* Học vấn */}
          <div className="about-card terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">education.sh</span>
            </div>
            <div className="terminal-body about-card-content">
              <div className="card-icon">
                <BookOpen size={24} />
              </div>
              <div className="card-info">
                <h4>Học vấn</h4>
                <h5>Trường Đại học Giao thông Vận tải Phân hiệu tại TP.HCM (UTC2)</h5>
                <p className="card-subtitle">Chuyên ngành Công nghệ thông tin</p>
                <div className="card-meta">
                  <Calendar size={14} /> <span>2023 - Hiện tại (Sinh viên)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ngoại ngữ */}
          <div className="about-card terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">languages.json</span>
            </div>
            <div className="terminal-body about-card-content">
              <div className="card-icon">
                <Globe size={24} />
              </div>
              <div className="card-info">
                <h4>Ngoại ngữ</h4>
                <div className="lang-item">
                  <span className="lang-name">Tiếng Việt:</span>
                  <span className="lang-level">Bản xứ (Native)</span>
                </div>
                <div className="lang-item">
                  <span className="lang-name">Tiếng Anh:</span>
                  <span className="lang-level">Bậc B1 (Intermediate)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thông tin liên lạc nhanh */}
          <div className="about-card terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">contact_info.md</span>
            </div>
            <div className="terminal-body about-card-content">
              <div className="card-info">
                <h4>Thông tin nhanh</h4>
                <ul className="contact-quick-list">
                  <li>
                    <Phone size={16} /> <span>037 837 2031</span>
                  </li>
                  <li>
                    <Mail size={16} /> <span>phamcongduc20102005@gmail.com</span>
                  </li>
                  <li>
                    <MapPin size={16} /> <span>151 Kha Vạn Cân, P. Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
