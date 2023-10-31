// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './assets/styles/css/bootstrap.css';
import Home from './Pages/Home';

import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import ProtectedRoute from './ProtectedRoute';
import Profile from './Pages/Profile';
import List from './Pages/List';


const App = () => {

    
const user = useSelector(selectUser);

  return (
    <div className="container">
      
      {/* {user ? <Home/>  : <Login/> } */}

      <Routes>
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/list" element={<ProtectedRoute element={<List />} />} />

      </Routes>
    
    </div>
  );
};

export default App;