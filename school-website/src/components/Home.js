import './Home.css';
import principalImg from '../assets/principal.jpg';
const Home = () => {
    return (
      <div className="home-page">
        <div className="hero-banner">
          <h1>New Power Matric Hr Sec School</h1>
          <p className="hero-text">Nurturing Excellence, Building Future Leaders</p>
          <button className="cta-button">Explore Programs</button>
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
        </div>

        <div className="announcements-section">
          <h2>Latest Updates</h2>
          <div className="announcement-cards">
            <div className="announcement-card">
              <h4>Admissions Open</h4>
              <p>Enrollment for new academic year has begun</p>
              <small>Posted: April 20, 2025</small>
            </div>
            <div className="announcement-card">
              <h4>Annual Sports Meet</h4>
              <p>Join us for the annual sports celebration</p>
              <small>Posted: April 15, 2025</small>
            </div>
          </div>
        </div>

        <div className="quick-stats">
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <p>Students</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <p>Teachers</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <p>Years of Excellence</p>
          </div>
        </div>
         {/* ...existing hero-banner code... */}

         <div className="principal-message">
          <div className="message-content">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <blockquote>
              "Education is not preparation for life; education is life itself. We at New Power Matric Hr Sec School believe in nurturing not just students, but future leaders who will shape tomorrow."
            </blockquote>
            <div className="principal-info">
            <img src={principalImg} alt="School Principal" />
              <div className="info-text">
                <h3>N.Periyasamy</h3>
                <p>Principal</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
};

export default Home;