// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Update active link
        document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ========== CONSOLE LOG ==========
console.log('🚀 Michael Onyango Ombuya - Portfolio');
console.log('💼 Software Engineering Student | IT Support | Cybersecurity Enthusiast');
console.log('📧 ombuyamichael1@gmail.com');
