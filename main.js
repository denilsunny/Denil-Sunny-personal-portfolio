document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links (Optional, already in CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.section-title, .about-text, .skill-card, .project-card, .service-item, .contact-wrapper');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .animate-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state (optional, can change button text)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            // Google Forms Submit URL
            const action = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-d4UwpdDGXBlgd19qSrtLAiiMTIcQe-IH1yLB9rIUqqe-dw/formResponse";

            fetch(action, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
                .then(() => {
                    // Determine successful submission (Google Forms no-cors returns opaque response)
                    successModal.classList.remove('hidden');
                    // Small delay to allow display:block to apply before adding opacity
                    setTimeout(() => {
                        successModal.classList.add('show');
                    }, 10);
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Something went wrong. Please try again or email me directly.');
                })
                .finally(() => {
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    if (closeModalBtn && successModal) {
        closeModalBtn.addEventListener('click', () => {
            successModal.classList.remove('show');
            setTimeout(() => {
                successModal.classList.add('hidden');
            }, 300); // Wait for transition
        });

        // Close on clicking outside
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('show');
                setTimeout(() => {
                    successModal.classList.add('hidden');
                }, 300);
            }
        });
    }
});
