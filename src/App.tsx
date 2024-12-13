import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  {Navbar}  from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { AdminDashboard } from './pages/AdminDashboard';
import { ClothingPage } from './pages/ClothingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/clothing" element={<ClothingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;