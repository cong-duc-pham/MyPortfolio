# Phạm Công Đức - Fullstack Developer Portfolio

Đây là mã nguồn trang Portfolio cá nhân của **Phạm Công Đức** được xây dựng bằng **React**, **Vite** và **Vanilla CSS**. Dự án được tổ chức và phát triển dựa trên bộ quy chuẩn quản lý nhánh Git và định dạng thông điệp commit chuyên nghiệp.

---

## 🚀 Công nghệ Sử Dụng
- **Core**: React 19, Vite 8, JavaScript (ES6+).
- **Styling**: Vanilla CSS3 (tối ưu hóa biến CSS, hỗ trợ responsive di động).
- **Icons**: Lucide Icons (sử dụng SVG gọn nhẹ, hiệu năng cao).

---

## ✨ Tính Năng Nổi Bật
- **Giao diện Premium**: Thiết kế trực quan, hiện đại với Dark Mode mặc định và nút chuyển đổi Light Mode mượt mà. Trạng thái giao diện được lưu trữ trong `localStorage`.
- **Hiệu ứng chữ gõ (Typing Effect)**: Tự động thay đổi các chức vụ chuyên môn ở phần mở đầu.
- **Bộ lọc dự án (Project Filtering)**: Cho phép lọc 5 dự án lớn từ CV theo các nhóm Mobile App, Web App, Systems / API bằng React State kết hợp chuyển cảnh mượt mà.
- **Modal chi tiết (Project Modals)**: Cung cấp popup hiển thị chuyên sâu về tính năng, kiến trúc giải pháp và công nghệ của từng dự án riêng biệt.
- **Form liên hệ tương tác**: Biểu mẫu liên hệ phản hồi tức thì và hiển thị thông báo trạng thái gửi tin.

---

## 🛠️ Hướng Dẫn Cài Đặt & Khởi Chạy

### Yêu cầu hệ thống
Đã cài đặt **Node.js** (Khuyên dùng v18 hoặc mới hơn) và **Git**.

### 1. Cài đặt các thư viện phụ thuộc
Chạy lệnh sau trong thư mục dự án:
```bash
npm install
```

### 2. Chạy thử ở môi trường Local (Development)
Để chạy dự án ở chế độ phát triển và xem trước giao diện:
```bash
npm run dev
```
Mở trình duyệt và truy cập liên kết: `http://localhost:5173`.

### 3. Biên dịch dự án (Build Production)
Để tạo phiên bản đóng gói tối ưu chạy trên môi trường thực tế (GitHub Pages, Vercel...):
```bash
npm run build
```
Sản phẩm biên dịch xong sẽ nằm trong thư mục `dist/`.

---

## 🌳 Quy Chuẩn Nhánh & Quy Trình Git (Git Workflow)

Dự án này áp dụng nghiêm ngặt các quy tắc quản lý nhánh và định dạng commit được định nghĩa dưới đây:

### 1. Phân chia nhánh (Branching Strategy)
- `main`: Chứa mã nguồn ổn định, sẵn sàng chạy thực tế (Production-ready). Chỉ merge từ nhánh `develop`. Không commit trực tiếp vào `main`.
- `develop`: Nhánh tích hợp phát triển chính. Nơi gom mã nguồn từ các nhánh feature/defect để chạy thử nghiệm tích hợp.
- `feature/xxx`: Dùng để phát triển tính năng mới (ví dụ: `feature/react-portfolio`).
- `defect/xxx`: Dùng để sửa lỗi (ví dụ: `defect/theme-bug`).

### 2. Quy trình làm việc (Workflow Steps)
1. Tạo nhánh phát triển từ `develop` (Ví dụ: `git checkout -b feature/new-page`).
2. Phát triển tính năng và thực hiện commit.
3. Push nhánh lên GitHub.
4. Tạo Pull Request (PR) từ nhánh feature vào `develop`.
5. Đợi các thành viên khác đánh giá (Review).
6. Merge Pull Request vào nhánh `develop`.
7. Khi hệ thống hoàn chỉnh và ổn định, tiến hành merge `develop` vào `main`.

### 3. Định dạng commit (Commit Message Format)
Áp dụng định dạng: `<type>: <short description>`
Trong đó, `<type>` bao gồm:
- `feat` ➔ Thêm tính năng mới (New Feature).
- `fix` ➔ Sửa lỗi (Bug Fix).
- `docs` ➔ Cập nhật tài liệu (Documentation).
- `refactor` ➔ Tối ưu hóa, cải tiến cấu trúc mã nguồn (Refactoring).
- `test` ➔ Viết kiểm thử (Unit Tests...).
- `chore` ➔ Cấu hình hệ thống, cài đặt thư viện, build CI (Configuration/Dependencies).

*Ví dụ:*
- `feat: implement project filters and detail modals`
- `fix: resolve light mode toggle persistence bug`
