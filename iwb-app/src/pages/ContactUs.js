import React from 'react';

const ContactUs = () => {
    const styles = {
        contactUsWrapper: { // New wrapper for the background
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            minHeight: '100vh', // Cover the entire viewport height
            padding: '20px',
            display: 'flex',
            justifyContent: 'center', // Center the content horizontally
            alignItems: 'center', // Center the content vertically
        },
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f9f9f9', // Keep the container white
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            width: '100%', // Make the container take full width
        },
        title: {
            fontSize: '2em',
            color: '#333',
            marginBottom: '20px',
            textAlign: 'center',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            display: 'block',
            fontSize: '1em',
            color: '#555',
            marginBottom: '5px',
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '1em',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '1em',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            height: '150px',
        },
        button: {
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '12px 20px',
            fontSize: '1.1em',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        socialIcons: {
            marginTop: '20px',
            textAlign: 'center',
        },
        icon: {
            fontSize: '2em',
            margin: '0 10px',
            color: '#333',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.contactUsWrapper}> {/* Apply background to this wrapper */}
            <div style={styles.container}>
                <h2 style={styles.title}>Contact Us</h2>
                <p style={{ textAlign: 'center' }}>We'd love to hear from you! Please fill out the form below or connect with us on social media.</p>

                <form>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="name">Name:</label>
                        <input style={styles.input} type="text" id="name" name="name" required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="email">Email:</label>
                        <input style={styles.input} type="email" id="email" name="email" required />
                    </div>
                    <div style={styles.formGroup}>
                        <label style={styles.label} htmlFor="message">Message:</label>
                        <textarea style={styles.textarea} id="message" name="message" required></textarea>
                    </div>
                    <button style={styles.button} type="submit">Send Message</button>
                </form>

                <div style={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fab fa-whatsapp-square"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                        <i className="fab fa-instagram-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
