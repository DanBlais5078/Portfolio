import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, subject, message, website } = req.body;

        if (!email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a transporter using environment variables for email credentials
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // Or any email service you use
            auth: {
                user: process.env.EMAIL_USER,  // Use environment variable for email
                pass: process.env.EMAIL_PASS,  // Use environment variable for app password
            },
        });

        // Define the email details
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            text: `${message}\n\nWebsite: ${website || 'Not provided'}`,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
        }
    } else {
        // Handle other HTTP methods (e.g., GET)
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}

