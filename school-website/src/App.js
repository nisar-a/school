import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Admission from './components/Admission';
import Rules from './components/Rules';
import Gallery from './components/Gallery'; // Added missing import
import Faculty from './components/Faculty';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;