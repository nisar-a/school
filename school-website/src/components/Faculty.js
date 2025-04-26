import { useState } from 'react';
import './Faculty.css';
import principalImg from '../assets/principal.jpg';
import vPrincipalImg from '../assets/vice-principal.jpg';
import mathTeacherImg from '../assets/math-teacher.jpg';
import scienceTeacherImg from '../assets/science-teacher.jpg';
import englishTeacherImg from '../assets/english-teacher.jpg';
import tamilTeacherImg from '../assets/tamil-teacher.jpg';
import socialTeacherImg from '../assets/social-teacher.jpg';
import placeholderImg from '../assets/placeholder.jpg';

const Faculty = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const facultyIntro = {
        title: "Our Distinguished Faculty",
        description: "At New Power Matric Hr Sec School, we take pride in our exceptional team of educators. Our faculty members are not just teachers; they are mentors, guides, and inspirational leaders who are dedicated to nurturing young minds and shaping future generations.",
        highlights: [
            {
                icon: "fas fa-graduation-cap",
                title: "Highly Qualified",
                text: "Most of our teachers hold Master's degrees with B.Ed qualifications"
            },
            {
                icon: "fas fa-chalkboard-teacher",
                title: "Experienced Team",
                text: "Average teaching experience of 15+ years"
            },
            {
                icon: "fas fa-book-reader",
                title: "Modern Teaching",
                text: "Blend of traditional values and innovative teaching methods"
            }
        ]
    };

    const facultyMembers = [
        {
            id: 1,
            name: 'N.Periyasamy',
            position: 'Principal',
            department: 'Administration',
            image: principalImg,
            qualification: 'Ph.D. in Education',
            experience: '25+ years'
        },
        {
            id: 2,
            name: 'Mrs.Martin',
            position: 'Vice Principal',
            department: 'Administration',
            image: vPrincipalImg,
            qualification: 'M.Sc., B.Ed.',
            experience: '20+ years'
        },
        {
            id: 3,
            name: 'Mr. Saravanan',
            position: 'Mathematics Sir',
            department: 'Mathematics',
            image: mathTeacherImg,
            qualification: 'M.Math, B.Ed.',
            experience: '15+ years'
        },
        {
            id: 4,
            name: 'Mr. A.Yaseen',
            position: 'Science Sir',
            department: 'Science',
            image: scienceTeacherImg,
            qualification: 'M.Sc., B.Ed.',
            experience: '15+ years'
        },
        {
            id: 5,
            name: 'Mr. Prem',
            position: 'English Sir',
            department: 'Languages',
            image: englishTeacherImg,
            qualification: 'M.A., B.Ed.',
            experience: '12+ years'
        },
        {
            id: 6,
            name: 'Mr.Pachai Muthu',
            position: 'Tamil Sir',
            department: 'Languages',
            image: tamilTeacherImg,
            qualification: 'M.A., B.Ed.',
            experience: '10+ years'
        },
        {
            id: 7,
            name: 'Mrs. Kasthuri',
            department: 'Social Studies',
            position: 'Social Science Staff',
            department: 'Social Studies',
            image: socialTeacherImg,
            qualification: 'M.A., B.Ed.',
            experience: '12+ years'
        }
    ];

    const departments = ['all', 'Administration', 'Science', 'Mathematics', 'Languages', 'Social Studies'];

    const filteredMembers = activeFilter === 'all'
        ? facultyMembers
        : facultyMembers.filter(member => member.department === activeFilter);

    return (
        <div className="faculty-page">
            <div className="faculty-hero">
                <h1>Our Faculty</h1>
                <p>Meet our dedicated team of educators</p>
            </div>

            <div className="faculty-intro">
                <h2>{facultyIntro.title}</h2>
                <p className="intro-description">{facultyIntro.description}</p>
                
                <div className="intro-highlights">
                    {facultyIntro.highlights.map((highlight, index) => (
                        <div key={index} className="highlight-card">
                            <i className={highlight.icon}></i>
                            <h3>{highlight.title}</h3>
                            <p>{highlight.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="department-filters">
                {departments.map(dept => (
                    <button 
                        key={dept}
                        className={`filter-btn ${activeFilter === dept ? 'active' : ''}`}
                        onClick={() => setActiveFilter(dept)}
                    >
                        {dept === 'all' ? 'All Departments' : dept}
                    </button>
                ))}
            </div>

            <div className="faculty-grid">
                {filteredMembers.map(member => (
                    <div key={member.id} className="faculty-card">
                        <div className="faculty-image">
                            <img 
                                src={member.image} 
                                alt={`${member.name} - ${member.position}`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = placeholderImg;
                                }}
                            />
                        </div>
                        <div className="faculty-info">
                            <h3>{member.name}</h3>
                            <h4>{member.position}</h4>
                            <p className="department">{member.department}</p>
                            <p className="qualification">{member.qualification}</p>
                            <p className="experience">{member.experience}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="faculty-stats">
                <div className="stat-item">
                    <span className="stat-number">25+</span>
                    <p>Years Average Experience</p>
                </div>
                <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <p>Expert Teachers</p>
                </div>
                <div className="stat-item">
                    <span className="stat-number">90%</span>
                    <p>Masters Degree Holders</p>
                </div>
            </div>
        </div>
    );
};

export default Faculty;