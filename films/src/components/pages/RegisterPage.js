import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3000/users', // Replace with the actual registration endpoint on your Rails API
        {
          user: {
            email: formData.email,
            password: formData.password,
          },
        }
      );

      if (response.status === 200) {
        // Successful registration
        // You can handle the successful registration here, such as displaying a success message or redirecting to a login page.
        setSuccessMessage('Registration successful. You can now log in.');
        setError(null); // Clear any previous error messages
        setFormData({ email: '', password: '' }); // Clear the form fields
        navigate('/films')
      }
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set an error message for failed registration attempts.
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
