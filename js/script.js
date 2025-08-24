// topbar-hover
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// contact form
// Get the form element
const form = document.getElementById('contactForm');
    
// Add a listener for the form submission
form.addEventListener("submit", async (e) => {
    // Prevent the default form submission that causes a page reload
    e.preventDefault();
    
    // Get the form data
    const formData = new FormData(form);
    
    // Use the Fetch API to submit the form data to Formspree
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    // Check if the submission was successful
    if (response.ok) {
        // Show the success alert message
        alert("Message sent successfully!");
        // Reset the form fields
        form.reset();
    } else {
        // Show an error alert if something went wrong
        alert("Oops! There was a problem sending your message.");
    }
});