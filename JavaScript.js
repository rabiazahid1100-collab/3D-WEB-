// Simple 3D parallax on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    document.querySelector('.hero-3d').style.transform = `translateZ(${rate}px) rotateX(-5deg)`;
});

// Add more 3D animations if needed