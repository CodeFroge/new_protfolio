import React, { useState } from "react";
import "./Contact.scss";
import Button from "../../components/Button/Button";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic (e.g., API call)
        setStatus("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">Get In Touch</h2>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <Button type="submit" variant="primary">Send Message</Button>
                </form>
                {status && <p className="contact__status">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
