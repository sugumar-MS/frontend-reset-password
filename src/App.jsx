// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import SendMail from './Components/SendMail.jsx';
import Verify from './Components/Verify.jsx';
import ChangePassword from './Components/ChangePassword.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
         
         <Route path="/register" element={<Register />} /> 
         <Route path="/" element={<Login />} />
         <Route path="/sendmail" element={<SendMail />} />
         <Route path="/verify" element={<Verify />} />
         <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
