// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './assets/styles/css/bootstrap.css';
import Home from './Pages/Home';

import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import ProtectedRoute from './ProtectedRoute';


const App = () => {

    
const user = useSelector(selectUser);

  return (
    <div className="container">
      
      {user ? <ProtectedRoute/>  : <Login/> }
    
    </div>
  );
};

export default App;
