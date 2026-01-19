// --- BIỂU ĐỒ ---
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
    type: 'bar',
    data: {
        labels: ['SQL', 'Python', 'ERP', 'Power BI', 'Analysis'],
        datasets: [{
            data: [90, 75, 80, 85, 95],
            backgroundColor: 'rgba(100, 255, 218, 0.6)',
            borderColor: '#64ffda',
            borderWidth: 1
        }]
    },
    options: { plugins: { legend: { display: false } } }
});

const impactCtx = document.getElementById('impactChart').getContext('2d');
new Chart(impactCtx, {
    type: 'radar',
    data: {
        labels: ['Efficiency', 'Accuracy', 'Security', 'Scalability', 'Cost Saving'],
        datasets: [{
            label: 'System Performance',
            data: [85, 90, 70, 80, 95],
            backgroundColor: 'rgba(100, 255, 218, 0.2)',
            borderColor: '#64ffda'
        }]
    }
});

// --- BỘ LỌC DỰ ÁN ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});