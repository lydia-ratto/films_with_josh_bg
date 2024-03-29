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
    <button onClick={handleLogout} className={'navlink'}>LOG OUT</button>
  );
};

export default Logout;
