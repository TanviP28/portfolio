// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Add hover effect to links and buttons
const links = document.querySelectorAll('a, button, .skill-item');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const target = btn.getAttribute('data-target');
        document.getElementById(`${target}-content`).classList.add('active');
    });
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real scenario, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    formResponse.classList.remove('hidden');
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formResponse.classList.add('hidden');
    }, 5000);
});

// Hamburger menu for mobile
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Scroll animations with GSAP
document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.2
        });
    });
    
    // Animate skill items
    gsap.utils.toArray('.skill-item').forEach((skill, i) => {
        gsap.from(skill, {
            scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -30,
            duration: 0.5,
            delay: i * 0.1
        });
    });
    
    // Animate skill bars
    gsap.utils.toArray('.skill-level').forEach((level) => {
        const width = level.style.width;
        level.style.width = 0;
        
        gsap.to(level, {
            scrollTrigger: {
                trigger: level,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            width: width,
            duration: 1.5,
            ease: 'power2.out'
        });
    });
});

// Typing animation for hero section
const typingText = document.querySelector('.typing-text');
const textToType = typingText.textContent;
typingText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < textToType.length) {
        typingText.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.onload = () => {
    setTimeout(typeWriter, 1000);
};
