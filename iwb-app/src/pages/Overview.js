import React from 'react';

const Overview = () => {
    const styles = {
        overviewWrapper: { // New wrapper for the background
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
        statsContainer: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        },
        statBox: {
            width: '200px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            marginBottom: '20px',
        },
        statTitle: {
            fontSize: '1.2em',
            color: '#6c757d',
            marginBottom: '5px',
        },
        statValue: {
            fontSize: '1.8em',
            color: '#007bff',
            fontWeight: 'bold',
        },
    };

    return (
        <div style={styles.overviewWrapper}> {/* Apply background to this wrapper */}
            <div style={styles.container}>
                <h2 style={styles.title}>IWB Recycling Overview</h2>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Company Summary</h3>
                    <p style={styles.paragraph}>
                        IWB Recycling is a leading provider of comprehensive recycling solutions, dedicated to creating a sustainable future. We offer a wide range of services, including residential, commercial, and industrial recycling programs.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Key Statistics</h3>
                    <div style={styles.statsContainer}>
                        <div style={styles.statBox}>
                            <h4 style={styles.statTitle}>Recycling Rate</h4>
                            <p style={styles.statValue}>85%</p>
                        </div>
                        <div style={styles.statBox}>
                            <h4 style={styles.statTitle}>Waste Diverted</h4>
                            <p style={styles.statValue}>500 Tons/Year</p>
                        </div>
                        <div style={styles.statBox}>
                            <h4 style={styles.statTitle}>Customer Satisfaction</h4>
                            <p style={styles.statValue}>98%</p>
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Future Goals</h3>
                    <p style={styles.paragraph}>
                        Our goals for the future include expanding our recycling programs, investing in new technologies, and further reducing our environmental impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overview;