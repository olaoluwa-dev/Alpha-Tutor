const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory database (replace with a real database in production)
const courses = [
    { name: 'Mathematics', description: 'Learn the fundamentals of math with our experienced tutors.' },
    { name: 'Science', description: 'Explore the world of science through interactive sessions.' },
    { name: 'Language Arts', description: 'Improve your language skills with our language arts courses.' }
];

// API endpoint to get courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// API endpoint to receive contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle the form data (e.g., save to a database)
    console.log(`Received form submission - Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ message: 'Form submission received successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});