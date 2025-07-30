import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AcademicCalendar.css';

const localizer = momentLocalizer(moment);

// Event data
const calendarEvents = [
    // Academic Terms
    {
      title: 'First Term Begins',
      start: new Date(2024, 5, 1),
      end: new Date(2024, 5, 1),
      type: 'academic'
    },
    {
      title: 'Second Term Begins',
      start: new Date(2024, 9, 1),
      end: new Date(2024, 9, 1),
      type: 'academic'
    },
    {
      title: 'Third Term Begins',
      start: new Date(2025, 0, 6),
      end: new Date(2025, 0, 6),
      type: 'academic'
    },

    // Examinations
    {
      title: 'First Term Exams',
      start: new Date(2024, 7, 20),
      end: new Date(2024, 7, 30),
      type: 'exam'
    },
    {
      title: 'Half-Yearly Exams',
      start: new Date(2024, 11, 10),
      end: new Date(2024, 11, 20),
      type: 'exam'
    },
    {
      title: 'Annual Exams',
      start: new Date(2025, 2, 15),
      end: new Date(2025, 2, 25),
      type: 'exam'
    },

    // National Holidays & Festivals
    {
      title: 'New Year',
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 1),
      type: 'holiday'
    },
    {
      title: 'Pongal Festival',
      start: new Date(2024, 0, 14),
      end: new Date(2024, 0, 17),
      type: 'holiday'
    },
    {
      title: 'Republic Day',
      start: new Date(2024, 0, 26),
      end: new Date(2024, 0, 26),
      type: 'holiday'
    },
    {
      title: 'Tamil Language Day',
      start: new Date(2024, 1, 21),
      end: new Date(2024, 1, 21),
      type: 'event'
    },
    {
      title: 'Maha Shivaratri',
      start: new Date(2024, 2, 8),
      end: new Date(2024, 2, 8),
      type: 'holiday'
    },
    {
      title: 'Ugadi',
      start: new Date(2024, 3, 9),
      end: new Date(2024, 3, 9),
      type: 'holiday'
    },
    {
      title: 'Tamil New Year',
      start: new Date(2024, 3, 14),
      end: new Date(2024, 3, 14),
      type: 'holiday'
    },
    {
      title: 'May Day',
      start: new Date(2024, 4, 1),
      end: new Date(2024, 4, 1),
      type: 'holiday'
    },
    {
      title: 'Independence Day',
      start: new Date(2024, 7, 15),
      end: new Date(2024, 7, 15),
      type: 'holiday'
    },
    {
      title: 'Teachers Day',
      start: new Date(2024, 8, 5),
      end: new Date(2024, 8, 5),
      type: 'event'
    },
    {
      title: 'Gandhi Jayanti',
      start: new Date(2024, 9, 2),
      end: new Date(2024, 9, 2),
      type: 'holiday'
    },
    {
      title: 'Ayudha Pooja',
      start: new Date(2024, 9, 23),
      end: new Date(2024, 9, 23),
      type: 'holiday'
    },
    {
      title: 'Vijayadasami',
      start: new Date(2024, 9, 24),
      end: new Date(2024, 9, 24),
      type: 'holiday'
    },
    {
      title: 'Deepavali',
      start: new Date(2024, 10, 1),
      end: new Date(2024, 10, 2),
      type: 'holiday'
    },
    {
      title: 'Children\'s Day',
      start: new Date(2024, 10, 14),
      end: new Date(2024, 10, 14),
      type: 'event'
    },
    {
      title: 'Christmas',
      start: new Date(2024, 11, 25),
      end: new Date(2024, 11, 25),
      type: 'holiday'
    },

    // Important School Events
    {
      title: 'Parent-Teacher Meeting',
      start: new Date(2024, 6, 15),
      end: new Date(2024, 6, 15),
      type: 'event'
    },
    {
      title: 'School Sports Day',
      start: new Date(2024, 8, 25),
      end: new Date(2024, 8, 25),
      type: 'event'
    },
    {
      title: 'Annual Science Exhibition',
      start: new Date(2024, 10, 20),
      end: new Date(2024, 10, 20),
      type: 'event'
    },
    {
      title: 'Cultural Festival',
      start: new Date(2024, 11, 15),
      end: new Date(2024, 11, 16),
      type: 'event'
    },
    {
      title: 'School Annual Day',
      start: new Date(2025, 1, 20),
      end: new Date(2025, 1, 20),
      type: 'event'
    },

    // Additional Holidays & Events
    {
      title: 'Ramzan',
      start: new Date(2024, 3, 10),
      end: new Date(2024, 3, 10),
      type: 'holiday'
    },
    {
      title: 'Good Friday',
      start: new Date(2024, 2, 29),
      end: new Date(2024, 2, 29),
      type: 'holiday'
    },
    {
      title: 'Buddha Purnima',
      start: new Date(2024, 4, 23),
      end: new Date(2024, 4, 23),
      type: 'holiday'
    },
    {
      title: 'Bakrid',
      start: new Date(2024, 5, 17),
      end: new Date(2024, 5, 17),
      type: 'holiday'
    },
    {
      title: 'Muharram',
      start: new Date(2024, 6, 17),
      end: new Date(2024, 6, 17),
      type: 'holiday'
    },
    {
      title: 'Krishna Jayanthi',
      start: new Date(2024, 7, 26),
      end: new Date(2024, 7, 26),
      type: 'holiday'
    },
    {
      title: 'Vinayagar Chathurthi',
      start: new Date(2024, 8, 7),
      end: new Date(2024, 8, 7),
      type: 'holiday'
    },
    {
      title: 'Milad-un-Nabi',
      start: new Date(2024, 8, 16),
      end: new Date(2024, 8, 16),
      type: 'holiday'
    },

    // Additional School Events
    {
      title: 'School Reopens',
      start: new Date(2024, 5, 1),
      end: new Date(2024, 5, 1),
      type: 'academic'
    },
    {
      title: 'World Environment Day',
      start: new Date(2024, 5, 5),
      end: new Date(2024, 5, 5),
      type: 'event'
    },
    {
      title: 'International Yoga Day',
      start: new Date(2024, 5, 21),
      end: new Date(2024, 5, 21),
      type: 'event'
    },
    {
      title: 'Science Week',
      start: new Date(2024, 7, 1),
      end: new Date(2024, 7, 5),
      type: 'event'
    },
    {
      title: 'Literary Week',
      start: new Date(2024, 9, 7),
      end: new Date(2024, 9, 11),
      type: 'event'
    },
    {
      title: 'Career Guidance Workshop',
      start: new Date(2024, 10, 25),
      end: new Date(2024, 10, 25),
      type: 'event'
    },
    {
      title: 'National Mathematics Day',
      start: new Date(2024, 11, 22),
      end: new Date(2024, 11, 22),
      type: 'event'
    },
    {
      title: 'Last Working Day',
      start: new Date(2025, 3, 31),
      end: new Date(2025, 3, 31),
      type: 'academic'
    }
  ];

const AcademicCalendar = () => {
    const [currentView, setCurrentView] = React.useState('month');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleNavigate = React.useCallback((date) => {
        setSelectedDate(date);
    }, []);

    const handleViewChange = React.useCallback((view) => {
        setCurrentView(view);
    }, []);

    const handleSelectEvent = React.useCallback((event) => {
        const startDate = moment(event.start).format('MMMM D, YYYY');
        const endDate = moment(event.end).format('MMMM D, YYYY');
        const message = `Event: ${event.title}\nDate: ${startDate}${
            event.end !== event.start ? `\nEnd: ${endDate}` : ''
        }\nType: ${event.type.charAt(0).toUpperCase() + event.type.slice(1)}`;
        
        window.alert(message);
    }, []);

    const eventStyleGetter = React.useCallback((event) => ({
        className: `rbc-event ${event.type}-event`,
        style: {
            backgroundColor: event.type === 'holiday' 
                ? 'transparent'  // Set transparent for holiday gradient
                : {
                    exam: '#dc3545',
                    event: '#28a745',
                    academic: '#0066cc'
                }[event.type],
            background: event.type === 'holiday' 
                ? 'linear-gradient(45deg, #fd7e14, #f17674)'
                : undefined,
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '4px 8px',
            fontWeight: event.type === 'holiday' ? 600 : 500,
            boxShadow: event.type === 'holiday' 
                ? '0 2px 4px rgba(253, 126, 20, 0.2)'
                : 'none',
            cursor: 'pointer'
        }
    }), []);

    // Update the day prop getter
    const dayPropGetter = React.useCallback(date => {
        const isHoliday = calendarEvents.some(event => 
            event.type === 'holiday' && 
            moment(date).isSame(event.start, 'day')
        );

        return {
            className: `rbc-day-bg ${isHoliday ? 'holiday' : ''}`,
            style: isHoliday ? {
                backgroundColor: 'rgba(253, 126, 20, 0.1)',
                borderRadius: '4px',
                position: 'relative'
            } : {}
        };
    }, [calendarEvents]);

    const CustomToolbar = ({ label, onNavigate, onView, view }) => (
        <div className="rbc-toolbar">
            <span className="rbc-btn-group">
                <button onClick={() => onNavigate('PREV')}>Previous</button>
                <button onClick={() => onNavigate('TODAY')}>Today</button>
                <button onClick={() => onNavigate('NEXT')}>Next</button>
            </span>
            <span className="rbc-toolbar-label">{label}</span>
            <span className="rbc-btn-group">
                <button 
                    className={view === 'month' ? 'rbc-active' : ''}
                    onClick={() => onView('month')}
                >
                    Month
                </button>
                <button 
                    className={view === 'week' ? 'rbc-active' : ''}
                    onClick={() => onView('week')}
                >
                    Week
                </button>
                <button 
                    className={view === 'day' ? 'rbc-active' : ''}
                    onClick={() => onView('day')}
                >
                    Day
                </button>
            </span>
        </div>
    );

    return (
        <div className="calendar-container">
            <h2>Academic Calendar 2024-25</h2>
            
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
                    <p>Public Holidays</p>
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
            />
        </div>
    );
};

export default AcademicCalendar;