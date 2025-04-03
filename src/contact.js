/**
 * ContactPage Component
 * 
 * This component renders a contact form, allowing users to submit their details to get in touch. 
 * Upon form submission, the fields are cleared, and a status message is displayed to indicate whether 
 * the message was sent successfully or if an error occurred.
 * 
 * Dependencies:
 * - React
 * - CSS for styling
 * 
 * @returns {JSX.Element} The rendered contact form page.
 */

import React, { useState } from 'react';
import './css/contact.css';

function ContactPage() {
    // State to hold form input values and status message
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
        website: '',  // Optional website field
    });

    const [status, setStatus] = useState('');  // To track form submission status

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus('Sending...');  // Set status to 'Sending' during submission

        try {
            // Send the form data to the Vercel API
            const response = await fetch('https://portfolio-murex-nine-67.vercel.app/api/contactapi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');  // Success message
            } else {
                setStatus(data.error || 'Something went wrong.');  // Error message from API response
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message.');  // Handle unexpected errors
        } finally {
            // Reset form fields and status after the form submission attempt
            setFormData({ email: '', subject: '', message: '', website: '' });
        }
    };

    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Contact Me.</h2>
            <p className="contact-description">
                I am interested in new opportunities to apply my skills as a developer for your business and would love to hear from you! 
                I am knowledgeable in app design, development, and site upkeep. I am very passionate about web and UI development and will work tirelessly to provide you with the best possible web-based solution for your needs. 
                Fill out the form below to get in touch with me, and I will get back to you as soon as possible. You can also reach me directly by email at <a href="mailto:blaiswebsolutions@gmail.com" className="email-link">blaiswebsolutions@gmail.com</a>
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                />
                <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="Your Website (Optional)"
                />
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                />
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <p>{status}</p> {/* Displays submission status message */}
        </div>
    );
}

export default ContactPage;


