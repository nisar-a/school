import { Link } from 'react-router-dom';
import './Home.css';
import principalImg from '../assets/principal.jpg';

const Home = () => {
    return (
      <div className="home-page">
        <div className="hero-banner">
          <h1>New Power Matric Hr Sec School</h1>
          <p className="hero-text">Nurturing Excellence, Building Future Leaders</p>
          <Link to="/admissions" className="cta-button">Explore Programs</Link>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-book-reader"></i>
            <h3>Quality Education</h3>
            <p>State-of-the-art curriculum and teaching methodologies</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-microscope"></i>
            <h3>Modern Labs</h3>
            <p>Well-equipped science and computer laboratories</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-running"></i>
            <h3>Sports Facilities</h3>
            <p>Extensive grounds for physical development</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-paint-brush"></i>
            <h3>Arts & Culture</h3>
            <p>Promoting creativity through various cultural activities</p>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <p>Expert Teachers</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <p>Pass Rate</p>
          </div>
        </div>

        <div className="principal-message">
          <div className="message-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <blockquote>
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. At New Power Matric Hr Sec School, we believe in nurturing not just academic excellence, but character, creativity, and leadership qualities that will shape the future of our nation."
            </blockquote>
            <div className="principal-info">
              <img src={principalImg} alt="School Principal" />
              <div className="info-text">
                <h3>N.Periyasamy</h3>
                <p>Principal</p>
                <small>M.Sc., M.Phil., B.Ed.</small>
              </div>
            </div>
          </div>
        </div>

        <div className="announcements-section">
          <h2>Latest Updates</h2>
          <div className="announcement-cards">
            <div className="announcement-card">
              <div className="card-header">
                <i className="fas fa-graduation-cap"></i>
                <h4>Admissions Open 2025-26</h4>
              </div>
              <p>Enrollment for new academic year has begun. Early bird discounts available.</p>
              <small>Posted: April 20, 2025</small>
              <Link to="/admissions" className="learn-more">Learn More →</Link>
            </div>
            <div className="announcement-card">
              <div className="card-header">
                <i className="fas fa-running"></i>
                <h4>Annual Sports Meet</h4>
              </div>
              <p>Join us for the annual sports celebration. Various competitions and events planned.</p>
              <small>Posted: April 15, 2025</small>
              <Link to="/events" className="learn-more">Learn More →</Link>
            </div>
            <div className="announcement-card">
              <div className="card-header">
                <i className="fas fa-trophy"></i>
                <h4>Academic Excellence</h4>
              </div>
              <p>Our students achieve outstanding results in board examinations.</p>
              <small>Posted: April 10, 2025</small>
              <Link to="/achievements" className="learn-more">Learn More →</Link>
            </div>
          </div>
        </div>

        <div className="gallery-section">
          <h2>School Life at NPMHSS</h2>
          <div className="gallery-grid">
            <div className="gallery-item academics">
              <div className="item-content">
                <i className="fas fa-book"></i>
                <h3>Academic Excellence</h3>
                <p>Focused learning environment</p>
              </div>
            </div>
            <div className="gallery-item sports">
              <div className="item-content">
                <i className="fas fa-futbol"></i>
                <h3>Sports Activities</h3>
                <p>Physical fitness and team spirit</p>
              </div>
            </div>
            <div className="gallery-item cultural">
              <div className="item-content">
                <i className="fas fa-theater-masks"></i>
                <h3>Cultural Events</h3>
                <p>Celebrating diversity and talent</p>
              </div>
            </div>
            <div className="gallery-item labs">
              <div className="item-content">
                <i className="fas fa-flask"></i>
                <h3>Modern Facilities</h3>
                <p>Well-equipped laboratories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Begin Your Journey With Us</h2>
          <p>Take the first step towards excellence in education</p>
          <div className="cta-buttons">
            <Link to="/admissions" className="cta-button">Apply Now</Link>
            <Link to="/contact" className="secondary-button">Schedule a Visit</Link>
          </div>
        </div>
      </div>
    );
};

export default Home;