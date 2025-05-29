import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import PortfolioPage from './PortfolioPage';
import JobApplicationsPage from './JobApplicationsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage/>} />
        <Route path="/job-applications" element={<JobApplicationsPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
