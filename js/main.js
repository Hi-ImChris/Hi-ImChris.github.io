function animateTitle() {
    const titleText = "Hi, I'm Chris";
    const typingSpeed = 200;
    const cursorBlinkSpeed = 500;
    const pauseBeforeRestart = 3000; // 3 seconds pause before retyping
    let charIndex = 0;
    
    function typeTitle() {
        if (charIndex < titleText.length) {
            document.title = titleText.slice(0, charIndex + 1) + "|";
            charIndex++;
            setTimeout(typeTitle, typingSpeed);
        } else {
            // Start blinking cursor effect after typing
            let cursorVisible = true;
            const blinkInterval = setInterval(() => {
                document.title = titleText + (cursorVisible ? "|" : " ");
                cursorVisible = !cursorVisible;
            }, cursorBlinkSpeed);

            // Optional: Reset and retype after a pause
            setTimeout(() => {
                clearInterval(blinkInterval);
                charIndex = 0;
                typeTitle();
            }, pauseBeforeRestart);
        }
    }

    typeTitle();
}

// Initialize animations when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Start title animation immediately
    animateTitle();

    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // For demonstration, we'll just show a success message
        // In a real application, you'd want to send this to a server
        try {
            // Simulate sending data
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            formStatus.textContent = 'Message sent successfully!';
            formStatus.className = 'form-status success';
            contactForm.reset();

            // Clear success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);

        } catch (error) {
            formStatus.textContent = 'Error sending message. Please try again.';
            formStatus.className = 'form-status error';
        }
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});