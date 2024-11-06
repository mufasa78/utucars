import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { StartupScreen } from './components/StartupScreen';
import { Chatbot } from './components/Chatbot';
import HomePage from './pages/HomePage';
import FleetPage from './pages/FleetPage';
import VehiclePage from './pages/VehiclePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './contexts/LanguageContext';


export function App() {
  const [showStartup, setShowStartup] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('country');
    if (hasVisited) {
      setShowStartup(false);
    }
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          {showStartup && <StartupScreen onClose={() => setShowStartup(false)} />}
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/fleet/:slug" element={<VehiclePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}