document.addEventListener('DOMContentLoaded', () => {
    // GSAP intro animation
    gsap.from("header", { y: -50, opacity: 0, duration: 1 });
    gsap.from(".intro h2", { y: 30, opacity: 0, delay: 0.5, duration: 1 });
    gsap.from(".intro p", { y: 30, opacity: 0, delay: 0.7, duration: 1 });
    gsap.from(".button", { scale: 0, opacity: 0, delay: 0.9, duration: 0.5 });

    // Scroll animations
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%"
            },
            y: 50,
            opacity: 0,
            duration: 0.8
        });
    });

    gsap.from(".contact-list li", {
        scrollTrigger: {
            trigger: ".contact-list",
            start: "top 80%"
        },
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
    });
});
// Typed.js initialization
const typed = new Typed("#typed-text", {
    strings: [
        "Python Developer",
        "Data Analyst",
        "Tech Enthusiast",
        "Project Manager in Making"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true
});

// AOS initialization
AOS.init({
    duration: 1000,
    once: true
});
