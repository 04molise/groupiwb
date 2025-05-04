import React from 'react';

const About = () => {
    const styles = {
        aboutWrapper: { // New wrapper to apply the background
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
        teamSection: {
            marginTop: '40px',
        },
        teamTitle: {
            fontSize: '2em',
            color: '#007bff',
            marginBottom: '20px',
            textAlign: 'center',
        },
        teamMembers: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        },
        teamMember: {
            width: '200px',
            marginBottom: '30px',
            textAlign: 'center',
        },
        teamMemberImage: {
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        },
        teamMemberName: {
            fontSize: '1.2em',
            color: '#343a40',
            fontWeight: 'bold',
            marginBottom: '5px',
        },
        teamMemberRole: {
            fontSize: '1em',
            color: '#6c757d',
        },
    };

    return (
        <div style={styles.aboutWrapper}> {/* Apply background to this wrapper */}
            <div style={styles.container}>
                <h2 style={styles.title}>About IWB Recycling</h2>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Our Mission</h3>
                    <p style={styles.paragraph}>
                        At IWB Recycling, our mission is to create a sustainable future by providing innovative and efficient recycling solutions. We are committed to reducing waste, conserving resources, and protecting the environment for future generations.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Our Vision</h3>
                    <p style={styles.paragraph}>
                        We envision a world where recycling is a seamless and integral part of everyday life. We strive to be a leader in the recycling industry, setting new standards for environmental responsibility and community engagement.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionTitle}>Our Values</h3>
                    <p style={styles.paragraph}>
                        <ul>
                            <li><strong>Sustainability:</strong> We prioritize environmental stewardship in all our operations.</li>
                            <li><strong>Innovation:</strong> We continuously seek new and better ways to recycle and reduce waste.</li>
                            <li><strong>Community:</strong> We engage with and support the communities we serve.</li>
                            <li><strong>Integrity:</strong> We operate with honesty, transparency, and accountability.</li>
                        </ul>
                    </p>
                </div>

                <div style={styles.teamSection}>
                    <h2 style={styles.teamTitle}>Meet Our Team</h2>
                    <div style={styles.teamMembers}>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Phakiso Motsoane"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Phakiso Motsoane</h3>
                            <p style={styles.teamMemberRole}>CEO</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Fako Mohale"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Fako Mohale</h3>
                            <p style={styles.teamMemberRole}>Chief Operations Officer</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Bokang Mahlomaholo"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Bokang Mahlomaholo</h3>
                            <p style={styles.teamMemberRole}>Head of Marketing</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Molise Lekhetho"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Molise Lekhetho</h3>
                            <p style={styles.teamMemberRole}>Senior Developer</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Katiso Moshoeshoe"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Katiso Moshoeshoe</h3>
                            <p style={styles.teamMemberRole}>Financial Analyst</p>
                        </div>
                        <div style={styles.teamMember}>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Likhapha Gladys Fiee"
                                style={styles.teamMemberImage}
                            />
                            <h3 style={styles.teamMemberName}>Likhapha Gladys Fiee</h3>
                            <p style={styles.teamMemberRole}>Client Relations Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;