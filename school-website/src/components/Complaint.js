import React from 'react';
import './Complaint.css';

const Complaint = () => {
    // Your Google Form URL for complaints
    const GOOGLE_FORM_URL = "https://forms.gle/nvohjSZ35VVgbaF47";

    return (
        <div className="complaint-container">
            <div className="complaint-header">
                <h1>📋 File a Complaint</h1>
                <p>We are committed to addressing your concerns promptly and fairly. Your voice matters.</p>
                <div className="complaint-assurance">
                    <span className="assurance-tag">🔒 Confidential</span>
                    <span className="assurance-tag">⚡ Quick Response</span>
                    <span className="assurance-tag">⚖️ Fair Investigation</span>
                </div>
            </div>

            <div className="complaint-info-section">
                <div className="info-cards">
                    <div className="info-card">
                        <div className="card-icon">⚡</div>
                        <h3>Quick Response</h3>
                        <p>All complaints are acknowledged within 24 hours and tracked until resolution</p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">🔒</div>
                        <h3>Confidential Process</h3>
                        <p>Your privacy and confidentiality are protected throughout the process</p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">⚖️</div>
                        <h3>Fair Investigation</h3>
                        <p>Impartial investigation by trained personnel following proper procedures</p>
                    </div>
                    <div className="info-card">
                        <div className="card-icon">📞</div>
                        <h3>Regular Follow-up</h3>
                        <p>Regular updates on complaint status and progress until final resolution</p>
                    </div>
                </div>
            </div>

            <div className="complaint-content">
                <div className="complaint-guidelines">
                    <h3>📋 Before You File a Complaint</h3>
                    <div className="guidelines-list">
                        <div className="guideline-item">
                            <span className="guideline-number">1</span>
                            <div>
                                <h4>Try Direct Communication</h4>
                                <p>Consider speaking directly with the concerned teacher or staff member first. Many issues can be resolved through open dialogue.</p>
                            </div>
                        </div>
                        <div className="guideline-item">
                            <span className="guideline-number">2</span>
                            <div>
                                <h4>Gather Information</h4>
                                <p>Collect relevant details, dates, names, and any supporting evidence related to your complaint.</p>
                            </div>
                        </div>
                        <div className="guideline-item">
                            <span className="guideline-number">3</span>
                            <div>
                                <h4>Be Specific & Factual</h4>
                                <p>Provide clear, factual descriptions of the incident or concern without emotional language.</p>
                            </div>
                        </div>
                    </div>

                    <div className="emergency-contact">
                        <h4>🚨 Emergency Situations</h4>
                        <p>For urgent safety concerns or emergencies, please call our helpline immediately:</p>
                        <p className="emergency-number">📞 +91-9876543210 (24/7)</p>
                        <p className="emergency-email">📧 emergency@newpowermatric.edu.in</p>
                    </div>

                    <div className="complaint-types">
                        <h4>📝 Common Complaint Types</h4>
                        <ul>
                            <li>Academic concerns and grading issues</li>
                            <li>Bullying or harassment incidents</li>
                            <li>Facility maintenance problems</li>
                            <li>Staff conduct concerns</li>
                            <li>Transportation issues</li>
                            <li>Administrative problems</li>
                            <li>Safety and security concerns</li>
                            <li>Communication breakdowns</li>
                            <li>Financial and fee-related issues</li>
                            <li>Discrimination or unfair treatment</li>
                        </ul>
                    </div>

                    <div className="complaint-process">
                        <h4>🔄 Our Complaint Resolution Process</h4>
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <strong>Receipt & Acknowledgment</strong>
                                    <p>Complaint received and acknowledged within 24 hours</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <strong>Initial Assessment</strong>
                                    <p>Complaint categorized and assigned to appropriate department</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <strong>Investigation</strong>
                                    <p>Thorough investigation conducted with all relevant parties</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <strong>Resolution & Follow-up</strong>
                                    <p>Action taken and complainant informed of the outcome</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="complaint-form-section">
                    <div className="google-form-container">
                        <div className="form-header">
                            <h3>📝 Submit Your Complaint</h3>
                            <p>Click the button below to access our complaint form. We take every concern seriously.</p>
                        </div>

                        <div className="google-form-embed">
                            <div className="form-preview">
                                <div className="form-preview-header">
                                    <div className="form-preview-icon">📋</div>
                                    <h4>New Power Matric Hr Sec School - Complaint Form</h4>
                                    <p>Help us address your concerns effectively</p>
                                </div>
                                
                                <div className="form-preview-fields">
                                    <div className="preview-field">
                                        <span className="field-icon">👤</span>
                                        <span>Personal & Contact Information</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">📂</span>
                                        <span>Complaint Category & Priority</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">📅</span>
                                        <span>Incident Date & Details</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">📝</span>
                                        <span>Detailed Description</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">👥</span>
                                        <span>Witnesses & Evidence</span>
                                    </div>
                                    <div className="preview-field">
                                        <span className="field-icon">🎯</span>
                                        <span>Requested Action</span>
                                    </div>
                                </div>

                                <a 
                                    href={GOOGLE_FORM_URL}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="google-form-btn-main"
                                >
                                    📋 Open Complaint Form
                                </a>
                            </div>
                        </div>

                        <div className="form-features">
                            <h4>🔧 Form Features</h4>
                            <div className="features-grid">
                                <div className="feature-item">
                                    <span className="feature-icon">🔒</span>
                                    <div>
                                        <strong>Confidential</strong>
                                        <p>Your privacy is protected</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🆔</span>
                                    <div>
                                        <strong>Tracking ID</strong>
                                        <p>Track your complaint status</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">📱</span>
                                    <div>
                                        <strong>Mobile Ready</strong>
                                        <p>Submit from any device</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">👤</span>
                                    <div>
                                        <strong>Anonymous Option</strong>
                                        <p>Submit without revealing identity</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="priority-levels">
                            <h4>🚨 Priority Levels</h4>
                            <div className="priority-grid">
                                <div className="priority-item urgent">
                                    <span className="priority-icon">🔴</span>
                                    <div>
                                        <strong>Urgent</strong>
                                        <p>Safety concerns, immediate attention required</p>
                                    </div>
                                </div>
                                <div className="priority-item high">
                                    <span className="priority-icon">🟠</span>
                                    <div>
                                        <strong>High</strong>
                                        <p>Serious issues affecting students/staff</p>
                                    </div>
                                </div>
                                <div className="priority-item medium">
                                    <span className="priority-icon">🟡</span>
                                    <div>
                                        <strong>Medium</strong>
                                        <p>Important but not immediately critical</p>
                                    </div>
                                </div>
                                <div className="priority-item low">
                                    <span className="priority-icon">🟢</span>
                                    <div>
                                        <strong>Low</strong>
                                        <p>Minor issues, routine handling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="complaint-contact">
                <h3>📞 Alternative Contact Methods</h3>
                <div className="contact-methods">
                    <div className="contact-method">
                        <span className="contact-icon">📧</span>
                        <div>
                            <strong>Email Complaint</strong>
                            <p>complaints@newpowermatric.edu.in</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <span className="contact-icon">📞</span>
                        <div>
                            <strong>Phone Complaint</strong>
                            <p>+91-XXXX-XXXXXX (9 AM - 5 PM)</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <span className="contact-icon">🏫</span>
                        <div>
                            <strong>In-Person</strong>
                            <p>Principal's Office or Administrative Desk</p>
                        </div>
                    </div>
                    <div className="contact-method">
                        <span className="contact-icon">📮</span>
                        <div>
                            <strong>Suggestion Box</strong>
                            <p>Located at main entrance and office</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaint;