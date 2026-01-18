// Kiểm tra xem thư viện Typed đã được tải chưa để tránh lỗi
if (window.Typed) {
    var typed = new Typed('.typed-text', {
        /**
         * 🔥 Các dòng chữ sẽ được gõ lần lượt.
         * Bạn có thể thêm/sửa/xóa tùy ý.
         */
        strings: [
            'Data Strategist.',
            'System Analyst.',
            'Finance Student.',
            'Tech Enthusiast.'
        ],
        typeSpeed: 50,  // Tốc độ gõ (số càng nhỏ gõ càng nhanh)
        backSpeed: 30,  // Tốc độ xóa
        backDelay: 1500, // Thời gian dừng lại trước khi xóa (1500ms = 1.5 giây)
        loop: true       // Lặp lại vô tận
    });
}