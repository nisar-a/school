import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('.nav-content')) {
        setMenuOpen(false);
      }
      if (dropdownOpen && !e.target.closest('.dropdown')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen, dropdownOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <h1>New Power Matric Hr Sec School</h1>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
             onClick={(e) => {
               e.stopPropagation();
               setMenuOpen(!menuOpen);
             }}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/admission" onClick={() => setMenuOpen(false)}>Admission</Link></li>
          <li><Link to="/rules" onClick={() => setMenuOpen(false)}>Rules & Regulations</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link></li>
          <li><Link to="/calendar" onClick={() => setMenuOpen(false)}>Academic Calendar</Link></li>
          
          {/* Support Dropdown */}
          <li className="dropdown">
            <button 
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              Support <span className={`dropdown-arrow ${dropdownOpen ? 'active' : ''}`}>▼</span>
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
              <li>
                <Link 
                  to="/feedback" 
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  📝 Feedback
                </Link>
              </li>
              <li>
                <Link 
                  to="/complaint" 
                  onClick={() => {
                    setMenuOpen(false);
                    setDropdownOpen(false);
                  }}
                >
                  📋 Complaint
                </Link>
              </li>
            </ul>
          </li>
          
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;