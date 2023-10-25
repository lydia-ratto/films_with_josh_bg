import React from 'react';
import { useNavigate } from 'react-router';

function Logout({ logout }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from local storage
    logout()
    navigate('/films')
  };

  return (
    <button className='navlink' onClick={handleLogout}>LOGOUT</button>
  );
};

export default Logout;