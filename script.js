// Thay đổi background của Navbar khi cuộn chuột
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        navbar.style.padding = "15px 0";
    } else {
        navbar.style.boxShadow = "none";
        navbar.style.padding = "20px 0";
    }
});

// Hiệu ứng hiện dần khi cuộn trang (Simple Reveal)
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        if (top >= offset) {
            sec.classList.add('show-animate');
        }
    });
});