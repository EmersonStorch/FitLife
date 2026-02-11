
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { Nutrition } from './pages/Nutrition';
import { AdminPortal } from './pages/AdminPortal';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Premium } from './pages/Premium';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/workouts" element={<Layout><Workouts /></Layout>} />
      <Route path="/nutrition" element={<Layout><Nutrition /></Layout>} />
      <Route path="/blog" element={<Layout><Blog /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/premium" element={<Layout><Premium /></Layout>} />
      
      {/* Hidden Admin Secret Route */}
      <Route path="/admin-secure-portal-99" element={<AdminPortal />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
