import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Mylogin from './Pages/Login';
import Mydashboard from './Modules/Dashboard';

const Myapp = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      navigate('/dashboard', { state: { userName: input } }); // ✅ Pass userName via state
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Mylogin input={input} handleChange={handleChange} handleSubmit={handleSubmit} />} />
        <Route path='/dashboard' element={<Mydashboard />} /> {/* ✅ No props passed */}
      </Routes>
    </div>
  );
};

export default Myapp;