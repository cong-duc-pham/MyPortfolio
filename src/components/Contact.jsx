import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Liên hệ</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Kết nối với mình</h3>
          <p>
            Bạn đang có dự án cần triển khai, muốn hợp tác làm việc hoặc chỉ đơn giản là muốn chia sẻ kiến thức công nghệ? 
            Hãy gửi tin nhắn hoặc liên hệ trực tiếp với mình qua các kênh bên dưới nhé!
          </p>

          <div className="contact-methods">
            <a href="tel:0378372031" className="contact-method-card">
              <div className="method-icon">
                <Phone size={20} />
              </div>
              <div className="method-details">
                <span className="method-title">Điện thoại</span>
                <span className="method-value">037 837 2031</span>
              </div>
            </a>

            <a href="mailto:phamcongduc20102005@gmail.com" className="contact-method-card">
              <div className="method-icon">
                <Mail size={20} />
              </div>
              <div className="method-details">
                <span className="method-title">Email</span>
                <span className="method-value">phamcongduc20102005@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/cong-duc-pham" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="method-icon">
                <Github size={20} />
              </div>
              <div className="method-details">
                <span className="method-title">GitHub</span>
                <span className="method-value">github.com/cong-duc-pham</span>
              </div>
            </a>

            <div className="contact-method-card no-link">
              <div className="method-icon">
                <MapPin size={20} />
              </div>
              <div className="method-details">
                <span className="method-title">Địa chỉ</span>
                <span className="method-value">151 Kha Vạn Cân, Hiệp Bình Chánh, Thủ Đức, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <span className="terminal-title">send_message.sh</span>
          </div>
          <div className="terminal-body">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ & Tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email liên hệ *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nguyenvana@gmail.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Tiêu đề</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Hợp tác phát triển..."
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Nội dung tin nhắn *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Xin chào Đức, mình muốn..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn-primary btn-submit ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Đang gửi...' : 'Gửi tin nhắn'}
                <Send size={18} />
              </button>

              {status === 'success' && (
                <div className="alert alert-success">
                  Cảm ơn bạn! Lời nhắn của bạn đã được gửi đi thành công. Mình sẽ phản hồi sớm nhất có thể.
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger">
                  Đã xảy ra lỗi. Vui lòng kiểm tra lại thông tin và các trường bắt buộc (*).
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
