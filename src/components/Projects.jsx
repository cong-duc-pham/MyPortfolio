import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'SWINGS HOUSE',
      subtitle: 'Room Rental Mobile Application',
      category: 'mobile',
      categoryLabel: 'Mobile App',
      filename: 'SwingsHouse.dart',
      technologies: ['Flutter', 'Dart', 'ASP.NET Core 8 Web API', 'SQL Server', 'Firebase', 'SignalR'],
      summary: 'Ứng dụng di động đa nền tảng hỗ trợ tìm kiếm phòng trọ, quản lý bài đăng, xác thực OTP, nhắn tin thời gian thực và quản lý lịch hẹn.',
      details: {
        features: [
          'Tìm kiếm phòng trọ và lọc theo vị trí, giá thuê, tiện ích.',
          'Quản lý bài đăng tin phòng trọ (thêm mới, chỉnh sửa, xóa, duyệt tin).',
          'Đăng nhập, đăng ký và xác thực tài khoản qua Firebase Authentication.',
          'Nhắn tin trực tiếp (Real-time Chat) và gửi thông báo tức thời giữa khách thuê và chủ nhà.',
          'Lập lịch hẹn xem phòng trực tuyến và quản trị hệ thống tập trung dành cho Admin.'
        ],
        solutions: [
          'Phát triển ứng dụng Mobile đa nền tảng mượt mà bằng Flutter & Dart.',
          'Thiết kế hệ thống RESTful API hiệu năng cao với ASP.NET Core 8 Web API.',
          'Tích hợp SignalR thiết lập kết nối WebSocket liên tục cho trò chuyện thời gian thực.',
          'Lưu trữ dữ liệu có cấu trúc bằng SQL Server và quản lý thực thể bằng Entity Framework Core.'
        ]
      }
    },
    {
      id: 2,
      title: 'Facebook Page API & Auto Comment Processing',
      subtitle: 'Hệ thống xử lý bình luận và phản hồi tự động',
      category: 'system',
      categoryLabel: 'Systems / API',
      filename: 'FbWebhookProcessor.cs',
      technologies: ['ASP.NET Core 8', 'Facebook Graph API', 'Apache Kafka', 'Docker', 'Gemini API', 'Swagger'],
      summary: 'Đường ống (pipeline) xử lý bất đồng bộ tiếp nhận webhook bình luận từ Facebook, phân tích spam, nhận diện cảm xúc bằng AI và tự động ẩn hoặc trả lời.',
      details: {
        features: [
          'Tiếp nhận webhook sự kiện thời gian thực khi Fanpage nhận bình luận mới.',
          'Sử dụng hàng đợi thông điệp để xử lý bất đồng bộ, tránh quá tải khi Fanpage có lượng tương tác lớn.',
          'Tự động phát hiện bình luận spam hoặc chứa từ khóa cấm để ẩn đi.',
          'Tích hợp AI (Gemini API) để phân tích ý định (intent) và cảm xúc (sentiment) của bình luận.',
          'Tự động soạn câu trả lời (auto-reply) phù hợp với nội dung bình luận.'
        ],
        solutions: [
          'Xây dựng kiến trúc hướng sự kiện (Event-driven Architecture) kết hợp Apache Kafka làm Message Broker.',
          'Tích hợp SDK Facebook Graph API để thực hiện các hành động ẩn, hiện và trả lời bình luận tự động.',
          'Triển khai toàn bộ hạ tầng và ứng dụng dưới dạng Docker Containers giúp dễ dàng đóng gói và phân phối hệ thống.',
          'Tích hợp Gemini API thông qua các truy vấn tối ưu nhằm phân tích ngữ cảnh bình luận nhanh chóng.'
        ]
      }
    },
    {
      id: 3,
      title: 'Faculty Training & Lecture Outline Management System',
      subtitle: 'Hệ thống quản lý đào tạo khoa và đề cương bài giảng',
      category: 'web',
      categoryLabel: 'Web App',
      filename: 'FacultyManager.cs',
      technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework', 'JWT', 'Bootstrap'],
      summary: 'Hệ thống quản trị web giúp quản lý khoa, giảng viên, sinh viên, môn học, chương trình đào tạo và quy trình phê duyệt đề cương bài giảng.',
      details: {
        features: [
          'Quản lý hồ sơ giảng viên, sinh viên, cấu trúc khoa và thông tin các môn học.',
          'Quản lý đề cương bài giảng (soạn thảo, gửi phê duyệt, phản hồi chỉnh sửa).',
          'Phân quyền người dùng chặt chẽ (Role-based Access Control - RBAC) sử dụng mã thông báo JWT.',
          'Tải lên, lưu trữ tài liệu bài giảng trực tuyến và quản lý lịch sử chỉnh sửa.',
          'Thông báo tự động đến giảng viên khi đề cương được phê duyệt hoặc yêu cầu chỉnh sửa.'
        ],
        solutions: [
          'Sử dụng mô hình MVC (Model-View-Controller) của ASP.NET Core giúp phân tách rõ ràng giao diện và logic.',
          'Thiết kế và chuẩn hóa cơ sở dữ liệu quan hệ SQL Server, tối ưu hóa các câu truy vấn thông qua Entity Framework.',
          'Bảo mật hệ thống bằng mã hóa mật khẩu và phân quyền chi tiết với JWT Token.',
          'Xây dựng giao diện Responsive thân thiện với thiết bị di động bằng Bootstrap kết hợp CSS tùy chỉnh.'
        ]
      }
    },
    {
      id: 4,
      title: 'CollaborativeWorkspace',
      subtitle: 'Bảng công việc Kanban đồng bộ thời gian thực',
      category: 'web',
      categoryLabel: 'Web App',
      filename: 'KanbanWorkspace.jsx',
      technologies: ['React', 'Tailwind CSS', 'ASP.NET Core 8 Web API', 'SignalR', 'SQL Server', 'Entity Framework Core'],
      summary: 'Ứng dụng làm việc nhóm trực tuyến với bảng Kanban kéo thả, hỗ trợ đồng bộ hóa tức thời giữa nhiều người dùng và bảo toàn dữ liệu giao dịch.',
      details: {
        features: [
          'Bảng Kanban kéo thả công việc (drag-and-drop) mượt mà.',
          'Đồng bộ hóa tức thời trạng thái các thẻ công việc giữa mọi thành viên đang mở dự án.',
          'Tạo dự án, quản lý danh sách công việc, gán người thực hiện và đặt hạn chót.',
          'Hệ thống bình luận và đính kèm tài liệu ngay trên thẻ công việc.',
          'Báo cáo tiến độ trực quan theo từng giai đoạn dự án.'
        ],
        solutions: [
          'Phát triển Frontend SPA bằng React kết hợp Tailwind CSS giúp giao diện gọn nhẹ và linh hoạt.',
          'Ứng dụng cơ chế Optimistic UI ở phía Client nhằm mang lại cảm giác kéo thả mượt mà không có độ trễ.',
          'Sử dụng SignalR để phát sóng (broadcast) các sự kiện cập nhật vị trí thẻ công việc tới toàn bộ kết nối client.',
          'Sử dụng Database Transactions trong SQL Server (thông qua EF Core) nhằm đảm bảo an toàn dữ liệu, chống xung đột dữ liệu (race conditions) khi nhiều người dùng thao tác kéo thả đồng thời.'
        ]
      }
    },
    {
      id: 5,
      title: 'Motorcycle Shop Management System',
      subtitle: 'Hệ thống quản lý cửa hàng bán và cho thuê xe máy',
      category: 'system',
      categoryLabel: 'Systems / API',
      filename: 'MotorcycleShop.cs',
      technologies: ['C#', 'WinForms', 'SQL Server', 'DAL/BLL/DTO Architecture'],
      summary: 'Ứng dụng Desktop quản lý bán xe, dịch vụ cho thuê xe máy, theo dõi kho linh kiện và doanh thu cửa hàng theo mô hình 3 lớp.',
      details: {
        features: [
          'Quản lý thông tin xe máy (mẫu mã, màu sắc, số khung, số máy) nhập kho và xuất bán.',
          'Quản lý hợp đồng cho thuê xe máy (đặt cọc, thời gian thuê, tính tiền phụ trội, bàn giao xe).',
          'Lập và in hóa đơn bán hàng, hóa đơn phụ tùng dịch vụ chuyên nghiệp.',
          'Theo dõi tồn kho linh kiện sửa chữa và nhắc lịch bảo dưỡng định kỳ cho khách hàng.',
          'Báo cáo doanh thu, lợi nhuận chi tiết theo ngày, tháng, năm.'
        ],
        solutions: [
          'Thiết kế kiến trúc N-tier (3 lớp: Presentation, Business Logic, Data Access) giúp mã nguồn tường minh và dễ kiểm thử.',
          'Sử dụng các DTO (Data Transfer Objects) để chuyển tải dữ liệu an toàn giữa các phân lớp ứng dụng.',
          'Kết nối trực tiếp SQL Server qua ADO.NET, xây dựng các Stored Procedures để xử lý dữ liệu nhanh chóng và an toàn.',
          'Xây dựng giao diện Windows Forms trực quan, tối ưu hóa các phím tắt cho nhân viên cửa hàng thao tác nhanh.'
        ]
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Dự án tiêu biểu</h2>
        <div className="section-divider"></div>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-container">
        <button 
          onClick={() => setFilter('all')} 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          Tất cả
        </button>
        <button 
          onClick={() => setFilter('web')} 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
        >
          Web App
        </button>
        <button 
          onClick={() => setFilter('mobile')} 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
        >
          Mobile App
        </button>
        <button 
          onClick={() => setFilter('system')} 
          className={`filter-btn ${filter === 'system' ? 'active' : ''}`}
        >
          Systems / API
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card terminal-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <span className="terminal-title">{project.filename}</span>
            </div>
            
            <div className="terminal-body">
              <div className="project-card-header">
                <span className="project-category">{project.categoryLabel}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <p className="project-summary">{project.summary}</p>
              
              <div className="project-tech-badges">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="tech-badge-small">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-badge-small font-semibold">+{project.technologies.length - 3}</span>
                )}
              </div>

              <div className="project-view-more">
                <span>Xem chi tiết dự án</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
