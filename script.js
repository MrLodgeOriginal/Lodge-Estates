// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the submit button and form
    const submitButton = document.querySelector('.submit-btn');
    const form = document.querySelector('.contact-form');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent actual form submission for now

        // Form validation (simple check)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // If all fields are valid, display a success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset the form
        form.reset();
    });

    // Add smooth scroll to anchor links (e.g., "Get in Touch")
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Offset for fixed header (if you have one)
                behavior: 'smooth'
            });
        });
    });
});
