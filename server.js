require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required.');
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
        auth: {
            user: process.env.EMAIL, // Load email from .env
            pass: process.env.PASSWORD, // Load password from .env
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // Load receiver email from .env
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send(`Message sent successfully!\n Thank you for reaching out to us, ${name}.\n We will get back to you shortly.`);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send message.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});