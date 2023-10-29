import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Pages/Login'

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
      {/* Add more routes here */}
    </Routes>
  </div>
)}
