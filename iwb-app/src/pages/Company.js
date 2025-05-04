import React from 'react';

const Company = () => {
    const styles = {
        companyWrapper: { // New wrapper for the background
            background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
            minHeight: '100vh', // Cover the entire viewport height
            padding: '40px',
        },
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '40px',
            backgroundColor: '#f8f9fa', // Keep the container white
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: '30px auto',
        },
        title: {
            fontSize: '2.5em',
            color: '#343a40',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
        },
        section: {
            marginBottom: '30px',
        },
        sectionTitle: {
            fontSize: '1.8em',
            color: '#007bff',
            marginBottom: '15px',
            borderBottom: '2px solid #007bff',
            paddingBottom: '8px',
        },
        paragraph: {
            fontSize: '1.1em',
            color: '#495057',
            lineHeight: '1.6',
        },
        list: {
            paddingLeft: '20px',
        },
        listItem: {
            fontSize: '1.1em',
            color: '#495057',
            marginBottom: '5px',
        },
    };

    return (
        <div style={styles.companyWrapper}> {/* Apply background to this wrapper */}
            <div style={styles.container}>
                <h2 style={styles.title}>Company Information</h2>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>History</h3>
                    <p style={styles.paragraph}>
                        IWB Recycling was founded in 2010 with the goal of transforming the recycling industry. Starting as a small local operation, we have grown to become a leading provider of recycling services in the region.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Our Services</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Residential Recycling Programs</li>
                        <li style={styles.listItem}>Commercial Recycling Solutions</li>
                        <li style={styles.listItem}>Industrial Waste Management</li>
                        <li style={styles.listItem}>Electronic Waste Recycling</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Certifications</h3>
                    <p style={styles.paragraph}>
                        IWB Recycling is certified by the leading environmental organizations, ensuring that our processes meet the highest standards of sustainability and environmental responsibility.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Awards and Recognition</h3>
                    <p style={styles.paragraph}>
                        We have been recognized with several awards for our commitment to environmental excellence, including the "Green Business of the Year" award in 2022.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Company;