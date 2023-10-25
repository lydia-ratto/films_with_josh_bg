import React, { useState } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AuthProvider({ children }) {
  const userString = localStorage.getItem('user')
  const userParsed = JSON.parse(userString)
  const [user, setUser] = useState(userParsed);
  const navigate = useNavigate();

  const register = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:3000/users', credentials);
  
      if (response.status === 200) {
        const userData = credentials;
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate("/films");
        toast.success("Registered successfully");
      } else {
        // Handle non-200 status codes
        handleServerError(response);
      }
    } catch (error) {
      // Handle network errors
      console.error(error);
      toast.error("Network error. Please try again later.");
    }
  };
  
  

  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:3000/users/sign_in', credentials);
  
      if (response.status === 200) {
        const userData = response.data['user'];
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate("/films");
        if (userData.email === "josh@bung.com") {
          toast.success("Oli Pye is always watching");
        } else {
          toast.success("Logged in successfully");
        }
      } else {
        // Handle non-200 status codes
        handleServerError(response);
      }
    } catch (error) {
      // Handle network errors
      console.error(error);
      toast.error("Network error. Please try again later.");
    }
  };
  
  const handleServerError = (response) => {
    switch (response.status) {
      case 400:
        // Bad request
        toast.error("Invalid request. Please check your input and try again.");
        break;
      case 401:
        // Unauthorized
        toast.error("Incorrect username or password. Please try again.");
        break;
      case 500:
        // Server error
        toast.error("Server error. Please try again later.");
        break;
      default:
        // Other status codes
        toast.error("An error occurred. Please try again.");
        break;
    }
  };  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
