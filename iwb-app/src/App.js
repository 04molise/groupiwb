import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import InvestorDashboard from './pages/InvestorDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import DeveloperDashboard from './pages/DeveloperDashboard';
import ClientDashboard from './pages/ClientDashboard';
import PrimaryPartnerDashboard from './pages/PrimaryPartnerDashboard';
import SalesDashboard from './pages/SalesDashboard';
import Navbar from './components/Navbar'; // Navbar component import
import About from './pages/About';
import Company from './pages/Company';
import Overview from './pages/Overview';
import ContactUs from './pages/ContactUs';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserRole(user.role);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setUserRole={setUserRole} /> {/* Add Navbar */}
        <Routes>
          <Route path="/" element={<Login setUserRole={setUserRole} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />

          <Route path="/dashboard" element={
            userRole === 'investor' ? <InvestorDashboard /> :
            userRole === 'finance' ? <FinanceDashboard /> :
            userRole === 'developer' ? <DeveloperDashboard /> :
            userRole === 'client' ? <ClientDashboard /> :
            userRole === 'primary_partner' ? <PrimaryPartnerDashboard /> :
            userRole === 'sales' ? <SalesDashboard /> : null
          } />

          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;