// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log("🚀 Michael Onyango Omboys - Portfolio");
console.log("💼 Software Engineering Student | IT Support | Cybersecurity Enthusiast");
