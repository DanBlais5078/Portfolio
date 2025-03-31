import React, { useState } from 'react';
import './css/contact.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to the server or email, etc.)
        console.log('Form submitted:', formData);
    };

    return (
        <div id="contact" className="contact">
            <h2 className="contact-header">Contact Me</h2>
            <p className="contact-description">I am interested in new opportunities to apply my skills as a developer for your business and would love to hear from you! I am knowledgeable in app design, development, and site upkeep. I am very passionate about web and UI development and will work tirelessly to provide you with the best possible web-based solution for your needs. Fill out the form below to get in touch with me and I will get back to you as soon as possible.</p>
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
                    placeholder="Your Wesbite (Optional)"
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
        </div>
    );
}

export default ContactPage;
