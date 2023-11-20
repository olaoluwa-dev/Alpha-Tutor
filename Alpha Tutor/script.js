document.addEventListener('DOMContentLoaded', function() {
    const courseList = document.getElementById('course-list');

    // Simulated courses data (replace with real data from backend)
    const courses = [
        { name: 'Mathematics', description: 'Learn the fundamentals of math with our experienced tutors.' },
        { name: 'Science', description: 'Explore the world of science through interactive sessions.' },
        { name: 'Language Arts', description: 'Improve your language skills with our language arts courses.' }
    ];

    // Display courses on the frontend
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
        courseList.appendChild(courseDiv);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted! (Note: This is a simulated alert. In a real application, data would be sent to the server)');
        // Here, you would typically send the form data to the server using AJAX or fetch.
    });
});