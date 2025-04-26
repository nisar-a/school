import './Contact.css';

const Contact = () => {
    // Google Maps embed URL for your school location
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.7057673231837!2d78.90894131429464!3d11.748247491661897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab150e1339cce9%3A0x2c44daae4e7ed0d0!2sNew%20Power%20Matric%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1682334567890!5m2!1sen!2sin";

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We're here to help and answer any questions you might have</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-card">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Visit Us</h3>
                        <p>VWJ8+732, Sankarapuram</p>
                        <p>Sankarapuram(TK), Kallakurichi(DT)</p>
                        <p>Tamil Nadu 606401, India</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-phone-alt"></i>
                        <h3>Call Us</h3>
                        <p>+91 9787795213</p>
                        <p>Mon-Fri, 8:00 AM - 4:30 PM</p>
                    </div>

                    <div className="info-card">
                        <i className="fas fa-envelope"></i>
                        <h3>Email Us</h3>
                        <p><a href="mailto:hardiknisar33@gmail.com">Send email</a></p>
                        <p>We'll respond within 24 hours</p>
                    </div>
                </div>

                <div className="map-container">
                    <h3>Our Location</h3>
                    <div className="map-wrapper">
                        <iframe 
                            src={mapEmbedUrl}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="School Location Map"
                            aria-label="Google Maps showing school location"
                        ></iframe>
                    </div>
                    <a 
                        href="https://maps.app.goo.gl/FrQMaUqg4YefRt5z5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="directions-button"
                    >
                        <i className="fas fa-directions"></i> Get Directions
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;