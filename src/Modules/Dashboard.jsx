import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Question from '../Components/Question';

const Mydashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve userName from state
  const userName = location.state?.userName;

  // If userName is missing (direct access), redirect to login
  useEffect(() => {
    if (!userName) {
      navigate('/'); // Redirect to login
    }
  }, [userName, navigate]);

  return (
    <>
      <h3>Player Name: <span>{userName}</span></h3>
      <Question />
    </>
  );
};

export default Mydashboard;