import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Events from './pages/Events';
import About from './pages/About';
import Admin from './pages/Admin';
import { ContentProvider } from './context/ContentContext';

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="donate" element={<Donate />} />
            <Route path="events" element={<Events />} />
            <Route path="about" element={<About />} />
          </Route>
          
          {/* Admin Route - Independent Layout */}
          <Route path="/admin" element={<Admin />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
};

export default App;