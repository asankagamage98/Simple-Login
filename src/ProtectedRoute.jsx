// ProtectedRoute.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from './Features/userSlice';

const ProtectedRoute = ({ element }) => {
  const user = useSelector(selectUser);
  
  console.log(user);
  
  if (!user) {
    // Redirect to the login page if user is not authenticated
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
