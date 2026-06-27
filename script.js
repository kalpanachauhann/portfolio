// TYPING ANIMATION
const roles = [
    "Python Developer",
    "Django Web Developer",
    "Data Analyst",
    "C++ Programmer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.getElementById('role-text');

function typeRole() {
    const current = roles[roleIndex];

    if (!isDeleting) {
        roleEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(typeRole, 1800);
            return;
        }
    } else {
        roleEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeRole, isDeleting ? 60 : 100);
}

typeRole();

// NAVBAR SCROLL SHRINK

window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) {
        nav.style.padding = '10px 60px';
        nav.style.background = 'rgba(10,10,15,0.98)';
    } else {
        nav.style.padding = '18px 60px';
        nav.style.background = 'rgba(10,10,15,0.85)';
    }
});

// HAMBURGER MENU
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// CONTACT FORM
function handleSubmit(e) {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 4000);
}

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-category, .info-card, .timeline-item').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});