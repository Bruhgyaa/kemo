import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Export from './pages/Export';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-subtle">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/export" element={<Export />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="top-right" 
              richColors 
              closeButton
              toastOptions={{
                style: {
                  background: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '500',
                },
              }}
            />
          </div>
    </Router>
  );
}

export default App;
