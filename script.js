document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Image Parallax / Hover
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', () => {
            heroImage.style.transform = 'scale(1.02)';
            heroImage.style.transition = 'transform 0.5s ease';
        });
        
        heroImage.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'scale(1)';
        });
    }

    // 2. Scroll Down Button
    const scrollBtn = document.getElementById('scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 3. Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        // Ensure hero is active on load
        if(!reveal.classList.contains('hero')) {
            revealOnScroll.observe(reveal);
        }
    });

    // 4. Modal Logic
    const projectBoxes = document.querySelectorAll('.project-box');
    const modalOverlay = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img'); // The placeholder in modal

    // Open Modal
    projectBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const title = box.getAttribute('data-title');
            const desc = box.getAttribute('data-desc');
            const placeholderText = box.querySelector('.project-img-placeholder').innerText;
            
            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalImg.innerText = placeholderText + ' Image Preview';

            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close Modal Function
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close on X click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close on overlay background click
    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});
