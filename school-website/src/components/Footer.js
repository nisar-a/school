import './Footer.css';
const Footer = () => {
    const handleSocialClick = (platform) => {
        let url = '';
        switch (platform) {
            case 'facebook':
                url = 'https://facebook.com/yourschool';
                break;
            case 'twitter':
                url = 'https://twitter.com/yourschool';
                break;
            // Add more cases for other social media platforms as needed
            default:
                return;
        }
        window.open(url, '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>New Power Matric Hr Sec School</h3>
                    <p>Empowering Minds, Shaping Futures</p>
                    <div className="footer-social">
                        <button onClick={() => handleSocialClick('facebook')} className="social-button">
                            <i className="fab fa-facebook"></i>
                        </button>
                        <button onClick={() => handleSocialClick('twitter')} className="social-button">
                            <i className="fab fa-twitter"></i>
                        </button>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/admission">Admissions</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p><i className="fas fa-map-marker-alt"></i> VWJ8+732, Sankarapuram, Tamil Nadu 606401</p>
                    <p><i className="fas fa-phone"></i> +91 9787795213</p>
                    <p><i className="fas fa-envelope"></i> hardiknisar33@gmail.com</p>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} New Power Matric Hr Sec School. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;