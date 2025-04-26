import { useState } from 'react';
import './Gallery.css';

// Import images
import schoolBuilding from '../assets/school-building.jpg';
import annualDay from '../assets/Annual Day.jpg';
import sportsMeet from '../assets/Sports Meet.jpg';
import library from '../assets/Library.jpg';
import scienceFair from '../assets/Science Fair.jpg';
import culturalProgram from '../assets/Cultural Program.jpg';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const galleryItems = [
        { id: 1, category: 'campus', image: schoolBuilding, title: 'School Building' },
        { id: 2, category: 'events', image: annualDay, title: 'Annual Day' },
        { id: 3, category: 'sports', image: sportsMeet, title: 'Sports Meet' },
        { id: 4, category: 'campus', image: library, title: 'Library' },
        { id: 5, category: 'activities', image: scienceFair, title: 'Science Fair' },
        { id: 6, category: 'events', image: culturalProgram, title: 'Cultural Program' }
    ];

    const filteredItems = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);

    return (
        <div className="gallery-page">
            <div className="gallery-hero">
                <h1>School Gallery</h1>
                <p>Capturing Moments, Creating Memories</p>
            </div>

            <div className="gallery-filters">
                {['all', 'campus', 'events', 'sports', 'activities'].map(category => (
                    <button 
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="gallery-item">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = schoolBuilding; // fallback image
                            }}
                        />
                        <div className="gallery-item-overlay">
                            <h3>{item.title}</h3>
                            <p className="category">{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;