import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AcademicCalendar.css';

const localizer = momentLocalizer(moment);

// Enhanced Event data for 2024-25 Academic Year with detailed descriptions
const calendarEvents = [
    // Academic Terms 2024-25
    {
      title: 'Academic Year Begins',
      start: new Date(2024, 5, 3),
      end: new Date(2024, 5, 3),
      type: 'academic',
      description: 'Welcome to the new academic year 2024-25! We look forward to an exciting journey of learning and growth together.',
      audience: 'All Students, Parents & Staff',
      activities: ['New student orientation', 'Welcome assembly', 'Class allocation']
    },
    {
      title: 'First Term Begins',
      start: new Date(2024, 5, 3),
      end: new Date(2024, 5, 3),
      type: 'academic',
      description: 'First term commences with fresh energy and new learning objectives.',
      audience: 'All Students & Faculty',
      activities: ['Curriculum introduction', 'Goal setting sessions', 'Academic planning']
    },
    {
      title: 'First Term Ends',
      start: new Date(2024, 8, 30),
      end: new Date(2024, 8, 30),
      type: 'academic',
      description: 'Conclusion of first term. Time to reflect on achievements and prepare for the next phase.',
      audience: 'All Students & Faculty',
      activities: ['Assessment review', 'Progress reports', 'Parent consultations']
    },
    {
      title: 'Second Term Begins',
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 1),
      type: 'academic'
    },
    {
      title: 'Second Term Ends',
      start: new Date(2024, 11, 31),
      end: new Date(2024, 11, 31),
      type: 'academic'
    },
    {
      title: 'Third Term Begins',
      start: new Date(2025, 0, 2),
      end: new Date(2025, 0, 2),
      type: 'academic'
    },
    {
      title: 'Academic Year Ends',
      start: new Date(2025, 3, 30),
      end: new Date(2025, 3, 30),
      type: 'academic'
    },

    // Examinations with detailed info
    {
      title: 'First Unit Test',
      start: new Date(2024, 6, 15),
      end: new Date(2024, 6, 20),
      type: 'exam',
      description: 'First assessment to evaluate student progress and understanding.',
      audience: 'All Students',
      activities: ['Written examinations', 'Practical assessments', 'Oral tests'],
      preparation: 'Study materials and exam schedules will be shared with parents and students.'
    },
    {
      title: 'Annual Exams',
      start: new Date(2025, 2, 15),
      end: new Date(2025, 2, 28),
      type: 'exam',
      description: 'Final comprehensive examinations for the academic year.',
      audience: 'All Students',
      activities: ['Board pattern exams', 'Practical assessments', 'Project evaluations'],
      preparation: 'Complete syllabus coverage, revision sessions, and mock tests.'
    },

    // Festivals with greetings and cultural significance
    {
      title: 'Independence Day',
      start: new Date(2024, 7, 15),
      end: new Date(2024, 7, 15),
      type: 'holiday',
      greeting: '🇮🇳 Happy Independence Day! Let us celebrate our freedom and honor our heroes!',
      description: 'A day to remember our freedom fighters and celebrate our nation\'s independence.',
      audience: 'Entire School Community',
      activities: ['Flag hoisting ceremony', 'Patriotic songs', 'Cultural programs', 'Essay competitions'],
      message: 'Join us in celebrating the spirit of freedom and unity!'
    },
    {
      title: 'Krishna Janmashtami',
      start: new Date(2024, 7, 26),
      end: new Date(2024, 7, 26),
      type: 'holiday',
      greeting: '🎉 Happy Krishna Janmashtami! May Lord Krishna bless you with happiness and prosperity!',
      description: 'Celebrating the birth of Lord Krishna with joy, devotion, and cultural activities.',
      audience: 'Students, Parents & Staff',
      activities: ['Krishna costume competition', 'Dahi Handi', 'Devotional songs', 'Dance performances'],
      message: 'Let us celebrate the divine teachings of Lord Krishna with our school family!'
    },
    {
      title: 'Ganesh Chaturthi',
      start: new Date(2024, 8, 7),
      end: new Date(2024, 8, 7),
      type: 'holiday',
      greeting: '🐘 Ganpati Bappa Morya! May Lord Ganesha remove all obstacles from your path!',
      description: 'Welcoming Lord Ganesha, the remover of obstacles and patron of arts and sciences.',
      audience: 'School Community',
      activities: ['Eco-friendly Ganesha making', 'Modak preparation', 'Traditional music', 'Environmental awareness'],
      message: 'Join us in an eco-friendly celebration that teaches values and environmental consciousness!'
    },
    {
      title: 'Diwali',
      start: new Date(2024, 10, 1),
      end: new Date(2024, 10, 1),
      type: 'holiday',
      greeting: '🪔 Happy Diwali! May the festival of lights illuminate your life with joy and prosperity!',
      description: 'Festival of lights celebrating the victory of good over evil.',
      audience: 'All Families & Staff',
      activities: ['Diya decoration', 'Rangoli competition', 'Sweet distribution', 'Cultural programs'],
      message: 'Let us spread light, joy, and happiness in our school community!'
    },
    {
      title: 'Christmas',
      start: new Date(2024, 11, 25),
      end: new Date(2024, 11, 25),
      type: 'holiday',
      greeting: '🎄 Merry Christmas! May this festive season bring peace, love, and happiness to all!',
      description: 'Celebrating the birth of Jesus Christ with love, sharing, and compassion.',
      audience: 'Entire School Community',
      activities: ['Christmas carols', 'Gift exchange', 'Charity drives', 'Christmas tree decoration'],
      message: 'Season of giving and sharing - let us spread Christmas cheer together!'
    },
    {
      title: 'Republic Day',
      start: new Date(2025, 0, 26),
      end: new Date(2025, 0, 26),
      type: 'holiday',
      greeting: '🇮🇳 Happy Republic Day! Proud to be Indian! Jai Hind!',
      description: 'Celebrating the adoption of our Constitution and democratic values.',
      audience: 'Students, Parents & Staff',
      activities: ['Parade ceremony', 'Constitution reading', 'National anthem', 'Citizenship awareness'],
      message: 'Let us pledge to uphold the values enshrined in our Constitution!'
    },
    {
      title: 'Holi',
      start: new Date(2025, 2, 14),
      end: new Date(2025, 2, 14),
      type: 'holiday',
      greeting: '🌈 Happy Holi! May your life be filled with colors of joy, love, and happiness!',
      description: 'Festival of colors celebrating the arrival of spring and triumph of good.',
      audience: 'School Community',
      activities: ['Safe color play', 'Traditional sweets', 'Folk dances', 'Unity celebration'],
      message: 'Let us paint our lives with colors of friendship and harmony!'
    },
    {
      title: 'Diwali',
      start: new Date(2025, 9, 17),
      end: new Date(2025, 9, 20),
      type: 'holiday',
      greeting: '🪔 Happy Diwali! May the festival of lights illuminate your life with joy and prosperity!',
      description: 'Festival of lights celebrating the victory of good over evil.',
      audience: 'All Families & Staff',
      activities: ['Diya decoration', 'Rangoli competition', 'Sweet distribution', 'Cultural programs'],
      message: 'Let us spread light, joy, and happiness in our school community!'
    },

    // School Events with enhanced descriptions
    {
      title: 'Teachers Day Celebration',
      start: new Date(2024, 8, 5),
      end: new Date(2024, 8, 5),
      type: 'event',
      greeting: '👩‍🏫 Happy Teachers Day! Thank you for shaping our future with knowledge and care!',
      description: 'Honoring our dedicated teachers who inspire and guide us every day.',
      audience: 'Students honoring Teachers',
      activities: ['Student performances', 'Thank you cards', 'Teacher appreciation ceremony', 'Role reversal activities'],
      message: 'A day to express gratitude to our mentors who light the path of knowledge!'
    },
    {
      title: 'Children\'s Day Celebration',
      start: new Date(2024, 10, 14),
      end: new Date(2024, 10, 14),
      type: 'event',
      greeting: '🎈 Happy Children\'s Day! You are the future leaders and dreamers of tomorrow!',
      description: 'Celebrating childhood, dreams, and the potential of every child.',
      audience: 'All Students',
      activities: ['Fun games', 'Talent shows', 'Story telling', 'Special treats', 'Award ceremonies'],
      message: 'Every child is special - let us celebrate the joy and wonder of childhood!'
    },
    {
      title: 'Parent-Teacher Meeting (Term 1)',
      start: new Date(2024, 6, 20),
      end: new Date(2024, 6, 20),
      type: 'event',
      description: 'Important discussion about student progress, challenges, and collaborative support.',
      audience: 'Parents & Teachers',
      activities: ['Individual consultations', 'Progress reports', 'Academic planning', 'Home-school coordination'],
      message: 'Together we can help every child reach their full potential. Your participation is valuable!',
      note: 'Please bring your child\'s progress report and any concerns you\'d like to discuss.'
    },
    {
      title: 'Science Exhibition',
      start: new Date(2024, 10, 25),
      end: new Date(2024, 10, 25),
      type: 'event',
      description: 'Students showcase their scientific creativity and innovation through exciting projects.',
      audience: 'Students, Parents & Community',
      activities: ['Project displays', 'Interactive experiments', 'Innovation awards', 'Science demonstrations'],
      message: 'Come witness the brilliant minds of tomorrow! Innovation and creativity on display!',
      invitation: 'Parents and community members are warmly invited to encourage young scientists!'
    },
    {
      title: 'School Annual Day',
      start: new Date(2025, 1, 5),
      end: new Date(2025, 1, 5),
      type: 'event',
      description: 'Grand celebration showcasing student talents, achievements, and school pride.',
      audience: 'Entire School Family',
      activities: ['Cultural performances', 'Award ceremonies', 'Student achievements', 'Community celebration'],
      message: 'A night to remember - celebrating our school family\'s achievements and talents!',
      invitation: 'Join us for an evening of entertainment, recognition, and community bonding!'
    },
    {
      title: 'Sports Day',
      start: new Date(2024, 9, 15),
      end: new Date(2024, 9, 15),
      type: 'event',
      description: 'Promoting physical fitness, sportsmanship, and healthy competition.',
      audience: 'All Students & Families',
      activities: ['Track and field events', 'Team sports', 'March past', 'Prize distribution'],
      message: 'Celebrating the spirit of sportsmanship and physical excellence!',
      invitation: 'Cheer for your children and house teams. Family participation encouraged!'
    },

    // Additional holidays with greetings
    {
      title: 'Gandhi Jayanti',
      start: new Date(2024, 9, 2),
      end: new Date(2024, 9, 2),
      type: 'holiday',
      greeting: '🕊️ Remembering Mahatma Gandhi - Be the change you wish to see in the world!',
      description: 'Honoring the Father of the Nation and his principles of truth and non-violence.',
      audience: 'School Community',
      activities: ['Peace march', 'Cleanliness drive', 'Essay on values', 'Community service'],
      message: 'Let us follow Bapu\'s path of truth, non-violence, and service to humanity!'
    },
    {
      title: 'New Year 2025',
      start: new Date(2025, 0, 1),
      end: new Date(2025, 0, 1),
      type: 'holiday',
      greeting: '🎊 Happy New Year 2025! May this year bring new opportunities and success!',
      description: 'Welcoming the new year with hope, resolutions, and positive energy.',
      audience: 'All Families',
      activities: ['Resolution making', 'Goal setting', 'Reflection sessions', 'New year wishes'],
      message: 'New year, new beginnings! Let us make 2025 a year of achievement and growth!'
    }

    // ... (include other events with similar enhancements)
];

const AcademicCalendar = () => {
    const [currentView, setCurrentView] = React.useState('month');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [showEventModal, setShowEventModal] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState(null);

    const handleNavigate = React.useCallback((date) => {
        setSelectedDate(date);
    }, []);

    const handleViewChange = React.useCallback((view) => {
        setCurrentView(view);
    }, []);

    const handleSelectEvent = React.useCallback((event) => {
        setSelectedEvent(event);
        setShowEventModal(true);
    }, []);

    const closeModal = React.useCallback(() => {
        setShowEventModal(false);
        setSelectedEvent(null);
    }, []);

    const eventStyleGetter = React.useCallback((event) => {
        const colors = {
            holiday: {
                background: 'linear-gradient(45deg, #fd7e14, #f17674)',
                color: '#fff',
                fontWeight: 600,
                border: '2px solid #fd7e14'
            },
            exam: {
                backgroundColor: '#dc3545',
                color: '#fff',
                border: '2px solid #dc3545'
            },
            event: {
                backgroundColor: '#28a745',
                color: '#fff',
                border: '2px solid #28a745'
            },
            academic: {
                backgroundColor: '#0066cc',
                color: '#fff',
                border: '2px solid #0066cc'
            }
        };

        return {
            style: {
                ...colors[event.type],
                borderRadius: '6px',
                padding: '4px 8px',
                cursor: 'pointer',
                fontSize: '0.9em',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
            }
        };
    }, []);

    const dayPropGetter = React.useCallback((date) => {
        const dateStr = moment(date).format('YYYY-MM-DD');
        const isHoliday = calendarEvents.some(event => {
            const eventStart = moment(event.start).format('YYYY-MM-DD');
            const eventEnd = moment(event.end).format('YYYY-MM-DD');
            return event.type === 'holiday' && dateStr >= eventStart && dateStr <= eventEnd;
        });

        const isToday = moment(date).isSame(moment(), 'day');

        if (isHoliday) {
            return {
                className: 'holiday-day',
                style: {
                    backgroundColor: 'rgba(253, 126, 20, 0.15)',
                    borderRadius: '4px',
                    position: 'relative'
                }
            };
        }

        if (isToday) {
            return {
                className: 'today-highlight',
                style: {
                    backgroundColor: 'rgba(0, 102, 204, 0.15)',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                }
            };
        }

        return {};
    }, []);

    const CustomToolbar = ({ label, onNavigate, onView, view }) => (
        <div className="rbc-toolbar">
            <span className="rbc-btn-group">
                <button onClick={() => onNavigate('PREV')} className="nav-btn">
                    ← Previous
                </button>
                <button onClick={() => onNavigate('TODAY')} className="today-btn">
                    Today
                </button>
                <button onClick={() => onNavigate('NEXT')} className="nav-btn">
                    Next →
                </button>
            </span>
            <span className="rbc-toolbar-label">{label}</span>
            <span className="rbc-btn-group">
                {['month', 'week', 'day'].map(viewType => (
                    <button 
                        key={viewType}
                        className={`view-btn ${view === viewType ? 'rbc-active' : ''}`}
                        onClick={() => onView(viewType)}
                    >
                        {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                    </button>
                ))}
            </span>
        </div>
    );

    const EventModal = () => (
        showEventModal && selectedEvent && (
            <div className="event-modal-overlay" onClick={closeModal}>
                <div className="event-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>×</button>
                    
                    {/* Event Header */}
                    <div className={`modal-header ${selectedEvent.type}`}>
                        <h3 className="modal-title">
                            {selectedEvent.title}
                        </h3>
                        {selectedEvent.greeting && (
                            <div className="event-greeting">
                                {selectedEvent.greeting}
                            </div>
                        )}
                    </div>
                    
                    {/* Event Content */}
                    <div className="modal-content">
                        <div className="event-info">
                            <p><strong>📅 Date:</strong> {moment(selectedEvent.start).format('MMMM D, YYYY')}</p>
                            {!moment(selectedEvent.end).isSame(moment(selectedEvent.start), 'day') && (
                                <p><strong>📅 End Date:</strong> {moment(selectedEvent.end).format('MMMM D, YYYY')}</p>
                            )}
                            <p><strong>📝 Type:</strong> {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}</p>
                            {selectedEvent.audience && (
                                <p><strong>👥 For:</strong> {selectedEvent.audience}</p>
                            )}
                        </div>

                        {selectedEvent.description && (
                            <div className="event-description">
                                <h4>About This Event</h4>
                                <p>{selectedEvent.description}</p>
                            </div>
                        )}

                        {selectedEvent.activities && (
                            <div className="event-activities">
                                <h4>📋 Activities Planned</h4>
                                <ul>
                                    {selectedEvent.activities.map((activity, index) => (
                                        <li key={index}>{activity}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedEvent.message && (
                            <div className="event-message">
                                <h4>💬 Message</h4>
                                <p className="special-message">{selectedEvent.message}</p>
                            </div>
                        )}

                        {selectedEvent.invitation && (
                            <div className="event-invitation">
                                <h4>🎉 Special Invitation</h4>
                                <p className="invitation-text">{selectedEvent.invitation}</p>
                            </div>
                        )}

                        {selectedEvent.note && (
                            <div className="event-note">
                                <h4>📌 Important Note</h4>
                                <p className="note-text">{selectedEvent.note}</p>
                            </div>
                        )}

                        {selectedEvent.preparation && (
                            <div className="event-preparation">
                                <h4>📚 Preparation</h4>
                                <p>{selectedEvent.preparation}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2>Academic Calendar 2024-25</h2>
                <p className="calendar-subtitle">
                    Complete schedule of academic activities, examinations, festivals, and events
                </p>
                <p className="welcome-message">
                    🏫 Welcome to our school family! Click on any event for detailed information, greetings, and activities.
                </p>
            </div>
            
            <div className="calendar-legend">
                <div className="legend-item">
                    <span className="legend-dot academic"></span>
                    <p>Academic Terms</p>
                </div>
                <div className="legend-item">
                    <span className="legend-dot exam"></span>
                    <p>Examinations</p>
                </div>
                <div className="legend-item">
                    <span className="legend-dot event"></span>
                    <p>School Events</p>
                </div>
                <div className="legend-item">
                    <span className="legend-dot holiday"></span>
                    <p>Festivals & Holidays</p>
                </div>
            </div>

            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                dayPropGetter={dayPropGetter}
                eventPropGetter={eventStyleGetter}
                onNavigate={handleNavigate}
                onView={handleViewChange}
                onSelectEvent={handleSelectEvent}
                view={currentView}
                date={selectedDate}
                popup
                selectable
                components={{
                    toolbar: CustomToolbar
                }}
                formats={{
                    dayFormat: 'D',
                    weekdayFormat: 'dddd',
                    monthHeaderFormat: 'MMMM YYYY',
                    dayHeaderFormat: 'dddd, MMMM D',
                    dayRangeHeaderFormat: ({ start, end }) => 
                        `${moment(start).format('MMMM D')} - ${moment(end).format('MMMM D, YYYY')}`
                }}
                messages={{
                    allDay: 'All Day',
                    previous: 'Previous',
                    next: 'Next',
                    today: 'Today',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                    agenda: 'Agenda',
                    date: 'Date',
                    time: 'Time',
                    event: 'Event',
                    noEventsInRange: 'No events in this range.',
                    showMore: total => `+${total} more events`
                }}
            />

            <EventModal />
        </div>
    );
};

export default AcademicCalendar;