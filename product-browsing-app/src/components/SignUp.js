// /components/SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './SignUp.css'; // Import SignUp.css file

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Replace useHistory() with useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For demonstration purposes, let's assume the submission is successful
    alert('Form submitted successfully!');
    setFormData({
      username: '',
      email: '',
      password: ''
    });
    navigate('/thank-you'); // Use navigate('/thank-you') instead of history.push('/thank-you')
  };

  return (
    <div className='sign-up-container'>
      <h2 className='sign-up-title'>Sign Up</h2>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <div>
          <label className='username-signup' htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            className='sign-up-input' // Add className for styling
          />
        </div>
        <div>
          <label className='email-signup' htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className='sign-up-input' // Add className for styling
          />
        </div>
        <div>
          <label className='password-signup' htmlFor="password">Password: </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className='sign-up-input' // Add className for styling
          />
        </div>
        <button type="submit" className='sign-up-submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
