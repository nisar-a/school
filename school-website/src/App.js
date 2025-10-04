import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Admission from './components/Admission';
import Rules from './components/Rules';
import Gallery from './components/Gallery';
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PosterBanner from './components/PosterBanner'; // Add this import
import './components/styles.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import AcademicCalendar from './components/AcademicCalendar';
import Feedback from './components/Feedback';
import Complaint from './components/Complaint';

function App() {
  return (
    <Router>
      <div className="app">
        <PosterBanner
          imageUrl="/assets/posters/competition.jpg"
          altText="Competition Poster"
        />
        <Navbar />
        <div className="main-content-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/calendar" element={<AcademicCalendar />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/complaint" element={<Complaint />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;