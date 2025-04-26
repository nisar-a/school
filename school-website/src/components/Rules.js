import { useState } from 'react';
import './Rules.css';

const Rules = () => {
    const [activeTab, setActiveTab] = useState('general');

    const schoolRules = {
        general: [
            {
                category: "General Rules",
                rules: [
                    "School timing: 8:30 AM to 4:30 PM",
                    "Attendance is mandatory",
                    "Mobile phones are strictly prohibited",
                    "Students must maintain discipline and cleanliness",
                    "Regular homework completion is mandatory",
                    "Proper school uniform is compulsory",
                    "Students must carry school diary daily",
                    "Maintain punctuality in all activities"
                ]
            },
            {
                category: "Academic Rules",
                rules: [
                    "Complete assignments on time",
                    "Participate in class activities",
                    "Maintain proper notebooks",
                    "Attend all examinations",
                    "Follow School rules strictly For Maintaining Discipline",
                ]
            }
        ],
        boys: [
            {
                category: "Rules for Boys",
                rules: [
                    "Hair should be neatly trimmed and well-groomed",
                    "Clean shaven face is mandatory",
                    "Only black formal shoes are allowed",
                    "uniform is Mandatory With Neatness and Cleanliness",
                    "Physical education Discipline is also mandatory",
                    "No jewelry or accessories allowed",
                    "Maintain proper haircut as per school norms",
                    "Wear school belt and ID card properly"
                ]
            }
        ],
        girls: [
            {
                category: "Rules for Girls",
                rules: [
                    "Hair should be neatly tied with white bands",
                    "Only small studs as earrings are allowed",
                    "uniform is Mandatory With Neatness and Cleanliness",
                    "Black shoes with white socks",
                    "Physical education Discipline is also mandatory",
                    "No makeup or nail polish allowed",
                    "Long hair must be braided neatly",
                    "Wear school blazzers and ID card properly"
                ]
            }
        ],
        parents: [
            {
                category: "Guidelines for Parents",
                rules: [
                    "Attend all Parent-Teacher Meetings",
                    "Check and sign school diary daily",
                    "leave requests must be submitted in advance",
                    "Give proper attention to child's health and hygiene",
                    "Inform about child's medical conditions",
                    "Motivate child for studies and activities",
                    "Update contact information promptly",
                    "Monitor academic progress regularly",
                    "Ensure proper uniform and equipment",
                    "Support school's disciplinary measures",
                    "Maintain regular communication with teachers"
                ]
            },
            {
                category: "Communication Protocol",
                rules: [
                    "Use school diary for communication",
                    "Schedule appointments in advance",
                    "Follow proper grievance procedure",
                    "Notify absence through proper channels",
                    "Maintain respectful communication"
                ]
            }
        ]
    };

    return (
        <div className="rules-page">
            <div className="rules-hero">
                <h1>Rules & Regulations</h1>
                <p>Guidelines for a Disciplined Learning Environment</p>
            </div>

            <div className="rules-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
                    onClick={() => setActiveTab('general')}
                >
                    <i className="fas fa-users"></i> General
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'boys' ? 'active' : ''}`}
                    onClick={() => setActiveTab('boys')}
                >
                    <i className="fas fa-male"></i> Boys
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'girls' ? 'active' : ''}`}
                    onClick={() => setActiveTab('girls')}
                >
                    <i className="fas fa-female"></i> Girls
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'parents' ? 'active' : ''}`}
                    onClick={() => setActiveTab('parents')}
                >
                    <i className="fas fa-house-user"></i> Parents
                </button>
            </div>

            <div className="rules-container">
                {schoolRules[activeTab].map((section, index) => (
                    <div key={index} className={`rules-section ${activeTab}-section`}>
                        <h2>
                            {activeTab === 'boys' && <i className="fas fa-male"></i>}
                            {activeTab === 'girls' && <i className="fas fa-female"></i>}
                            {activeTab === 'parents' && <i className="fas fa-house-user"></i>}
                            {section.category}
                        </h2>
                        <ul>
                            {section.rules.map((rule, ruleIndex) => (
                                <li key={ruleIndex}>
                                    <i className="fas fa-check-circle"></i>
                                    <span>{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="rules-note">
                <h3>Important Note</h3>
                <p>Violation of these rules may result in disciplinary action. Parents and students are requested to cooperate in maintaining school discipline.</p>
            </div>
        </div>
    );
};

export default Rules;