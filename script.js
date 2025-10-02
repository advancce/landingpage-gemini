document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Modal
    const modal = document.getElementById('welcome-modal');
    const closeButton = document.querySelector('.close-button');

    setTimeout(function() {
        modal.style.display = 'block';
    }, 3000);

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});