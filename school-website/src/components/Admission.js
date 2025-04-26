import './Admission.css';

const Admission = () => {
    return (
      <div className="admission-page">
        <div className="admission-hero">
          <h1>Admissions Open 2025-26</h1>
          <p className="hero-subtitle">Begin Your Child's Journey of Excellence</p>
          <a 
            href="https://forms.gle/eHeQeBQhHVSv5ZYd6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apply-button"
          >
            Apply Online Now
          </a>
        </div>

        <div className="online-admission-banner">
          <i className="fas fa-laptop"></i>
          <div className="banner-content">
            <h2>Quick Online Admission Process</h2>
            <p>Complete your admission process easily from home</p>
            <a 
              href="https://forms.gle/eHeQeBQhHVSv5ZYd6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="banner-link"
            >
              Fill Admission Form →
            </a>
          </div>
        </div>

        <div className="admission-grid">
          <div className="admission-info">
            <h2>Admission Process</h2>
            <div className="process-steps">
              <div className="step">
                <i className="fas fa-form"></i>
                <h3>Step 1</h3>
                <p>Fill Online Application Form</p>
              </div>
              <div className="step">
                <i className="fas fa-file-alt"></i>
                <h3>Step 2</h3>
                <p>Submit Required Details</p>
              </div>
              <div className="step">
                <i className="fas fa-users"></i>
                <h3>Step 3</h3>
                <p>School View</p>
              </div>
              <div className="step">
                <i className="fas fa-check-circle"></i>
                <h3>Step 4</h3>
                <p>Admission Confirmation</p>
              </div>
            </div>
          </div>

          <div className="requirements-section">
            <h2>Requirements</h2>
            <div className="requirements-grid">
              <div className="requirement-card">
                <h3>Documents Required</h3>
                <ul>
                  <li>Birth Certificate</li>
                  <li>Previous School Records</li>
                  <li>Transfer Certificate</li>
                  <li>Passport Size Photos</li>
                  <li>Aadhar Card Copy</li>
                </ul>
              </div>
              <div className="requirement-card">
                <h3>Age Criteria</h3>
                <ul>
                  <li>LKG: 3+ years</li>
                  <li>UKG: 4+ years</li>
                  <li>Grade 1: 5+ years</li>
                  <li>Other classes: Age appropriate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Admission;