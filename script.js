const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Xóa class active ở nút cũ, thêm vào nút mới
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
// 1. Biểu đồ Kỹ năng Hệ thống (Bar Chart)
const ctx1 = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['SQL', 'Python', 'ERP', 'Power BI', 'Analysis'],
        datasets: [{
            label: 'Proficiency (%)',
            data: [90, 75, 80, 85, 95],
            backgroundColor: 'rgba(100, 255, 218, 0.6)', // Màu Cyan đặc trưng
            borderColor: '#64ffda',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.1)' } },
            x: { grid: { display: false } }
        },
        plugins: { legend: { display: false } }
    }
});

// 2. Biểu đồ Tác động (Radar Chart - Rất phù hợp với MIS)
const ctx2 = document.getElementById('impactChart').getContext('2d');
new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['Efficiency', 'Accuracy', 'Security', 'Scalability', 'Cost Saving'],
        datasets: [{
            label: 'Project Performance',
            data: [85, 90, 70, 80, 95],
            fill: true,
            backgroundColor: 'rgba(100, 255, 218, 0.2)',
            borderColor: '#64ffda',
            pointBackgroundColor: '#64ffda'
        }]
    },
    options: {
        elements: { line: { borderWidth: 3 } },
        scales: {
            r: {
                angleLines: { color: 'rgba(255,255,255,0.1)' },
                grid: { color: 'rgba(255,255,255,0.1)' },
                pointLabels: { color: '#8892b0' }
            }
        }
    }
});