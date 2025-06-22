import './About.css';
const About = () => {
    return (
      <div className="about-page">
        <div className="hero-section">
          <h1>New Power Matric Hr Sec School</h1>
          <p className="tagline">Empowering Minds, Shaping Futures</p>
        </div>
        <div className="about-section achievements">
          <h3>Our Achievements</h3>
          <div className="achievement-grid">
            <div className="achievement-card">
              <span className="achievement-number">100%</span>
              <p>Board Exam Results</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">50+</span>
              <p>Expert Teachers</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">1000+</span>
              <p>Happy Students</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-number">25+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="about-section highlights">
          <h3>School Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <i className="fas fa-graduation-cap"></i>
              <h4>Academic Excellence</h4>
              <p>Consistent outstanding results in board examinations</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-users"></i>
              <h4>Experienced Faculty</h4>
              <p>Dedicated team of qualified educators</p>
            </div>
            <div className="highlight-item">
              <i className="fas fa-laptop"></i>
              <h4>Modern Infrastructure</h4>
              <p>State-of-the-art facilities for enhanced learning</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;