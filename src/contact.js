import React, { useState } from 'react';
import './css/contact.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
        website: '',  // Optional website field
    });

    const [status, setStatus] = useState('');  // This will hold the status message (e.g., "Sending..." or "Success")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus('Sending...');  // Show sending status

        try {
            // Send the form data to the Vercel API
            const response = await fetch('https://your-vercel-project.vercel.app/api/contactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');  // If the message is sent successfully
            } else {
                setStatus(data.error || 'Something went wrong.');  // If there's an error
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message.');  // Handle any other errors
        }
    };

    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Contact Me.</h2>
            <p className="contact-description">
                I am interested in new opportunities to apply my skills as a developer for your business and would love to hear from you! 
                I am knowledgeable in app design, development, and site upkeep. I am very passionate about web and UI development and will work tirelessly to provide you with the best possible web-based solution for your needs. 
                Fill out the form below to get in touch with me, and I will get back to you as soon as possible.
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
            <p>{status}</p> {/* Display status message (success/error) */}
        </div>
    );
}

export default ContactPage;

