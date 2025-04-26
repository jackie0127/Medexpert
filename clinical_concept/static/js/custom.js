// Custom JavaScript functionality

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll behavior
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Service card animations
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Dropdown menu enhancement
document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const dropdown = e.target.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-button')) {
        document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});

// Form validation
const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
};

// Loading state handling
const showLoading = (button) => {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="spinner"></span>';
    button.disabled = true;
    return originalText;
};

const hideLoading = (button, originalText) => {
    button.innerHTML = originalText;
    button.disabled = false;
};

// Video background lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });
    }
});