import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';


export default function ProtectedRoute() {
  return (
   
      <div className="container">
          <Routes>      
            <Route path="/" element={<Home />} />      
            <Route path="/profile" element={<Profile />} />     
            

          </Routes>
      </div>
    
  );
}
