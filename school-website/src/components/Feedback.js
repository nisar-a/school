import React from 'react';
import './Feedback.css';

const Feedback = () => {
    // Your Google Form URL
    const GOOGLE_FORM_URL = "https://forms.gle/CZEMbqzaeUsud3AG8";

    return (
        <div className="feedback-container">
            <div className="feedback-header">
                <h1>📝 Share Your Feedback</h1>
                <p>Your opinions matter to us! Help us improve our school services and create a better learning environment.</p>
                <div className="feedback-benefits">
                    <span className="benefit-tag">🚀 Quick & Easy</span>
                    <span className="benefit-tag">🔒 Secure</span>
                    <span className="benefit-tag">📊 Impactful</span>
                </div>
            </div>

            <div className="feedback-content">
                <div className="feedback-info">
                    <h3>🎯 Why Your Feedback Matters</h3>
                    <ul>
                        <li>📈 Helps us improve our educational services</li>
                        <li>🎯 Ensures we meet your expectations</li>
                        <li>🤝 Strengthens our school community</li>
                        <li>💡 Drives innovation in our teaching methods</li>
                        <li>🏆 Maintains our commitment to excellence</li>
                        <li>🌟 Creates a better experience for everyone</li>
                    </ul>

                    <div className="feedback-stats">
                        <h4>📊 Feedback Impact</h4>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">750+</span>
                                <span className="stat-label">Feedback Received</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">97%</span>
                                <span className="stat-label">Issues Resolved</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24hrs</span>
                                <span className="stat-label">Response Time</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4.8/5</span>
                                <span className="stat-label">Satisfaction Score</span>
                            </div>
                        </div>
                    </div>

                    <div className="feedback-guidelines">
                        <h4>💡 Tips for Effective Feedback</h4>
                        <ul className="guidelines-list">
                            <li>Be specific about your experience</li>
                            <li>Include both positive and constructive comments</li>
                            <li>Suggest practical improvements</li>
                            <li>Provide context when possible</li>
                            <li>Mention both what works well and areas for improvement</li>
                            <li>Be respectful and constructive in your language</li>
                        </ul>
                    </div>

                    <div className="feedback-categories">
                        <h4>📋 Feedback Categories</h4>
                        <div className="category-grid">
                            <div className="category-item">
                                <span className="category-icon">📚</span>
                                <span>Academic Programs</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">👩‍🏫</span>
                                <span>Teaching Quality</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">🏫</span>
                                <span>School Facilities</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">🚌</span>
                                <span>Transportation</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">🍽️</span>
                                <span>Canteen Services</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">⚽</span>
                                <span>Extracurricular Activities</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">🛡️</span>
                                <span>Safety & Security</span>
                            </div>
                            <div className="category-item">
                                <span className="category-icon">📞</span>
                                <span>Communication</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feedback-form-section">
                    <div className="google-form-container">
                        <div className="form-header">
                            <h3>📝 Submit Your Feedback</h3>
                            <p>Click the button below to access our feedback form. Your input helps us serve you better!</p>
                        </div>

                        <div className="google-form-embed">
                            <div className="form-preview">
                                <div className="form-preview-header">
                                    <div className="form-preview-icon">📝</div>
                                    <h4>New Power Matric Hr Sec School - Feedback Form</h4>
                                    <p>Share your thoughts and help us improve</p>
                                </div>
                                
                                <div className="form-preview-fields">
                                    <div className="preview-field">
                                        <span className="field-icon">👤</span>
                                        <span>Personal Information</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">📂</span>
                                        <span>Feedback Category</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">⭐</span>
                                        <span>Rating & Evaluation</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">💬</span>
                                        <span>Detailed Comments</span>
                                    </div>
                                </div>

                                <a 
                                    href={GOOGLE_FORM_URL}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="google-form-btn-main"
                                >
                                    📝 Open Feedback Form
                                </a>
                            </div>
                        </div>

                        <div className="form-features">
                            <h4>🔧 Form Features</h4>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <span className="feature-icon">🔒</span>
                                    <div>
                                        <strong>Secure & Private</strong>
                                        <p>Your information is protected</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">📱</span>
                                    <div>
                                        <strong>Mobile Friendly</strong>
                                        <p>Works on all devices</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">⚡</span>
                                    <div>
                                        <strong>Quick Submit</strong>
                                        <p>Takes only 3-5 minutes</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">👤</span>
                                    <div>
                                        <strong>Anonymous Option</strong>
                                        <p>Submit without personal details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feedback-contact">
                <h3>📞 Alternative Contact Methods</h3>
                <div className="contact-methods">
                    <div className="contact-method">
                        <span className="contact-icon">📧</span>
                        <div>
                            <strong>Email Us</strong>
                            <p>feedback@newpowermatric.edu.in</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <span className="contact-icon">📞</span>
                        <div>
                            <strong>Call Us</strong>
                            <p>+91-XXXX-XXXXXX</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <span className="contact-icon">🏫</span>
                        <div>
                            <strong>Visit Us</strong>
                            <p>Main Office - Reception Desk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;