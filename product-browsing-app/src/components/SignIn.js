// /components/SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SignIn = () => {
  const [formData, setFormData] = useState({
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
    alert('Sign In successful!');
    setFormData({
      email: '',
      password: ''
    });
    navigate('/'); // Redirect the user to the dashboard upon successful sign-in
  };

  return (
    <div className='sign-in-container'>
      <h2 className='sign-in-title'>Sign In</h2>
      <form onSubmit={handleSubmit} className='sign-in-form'>
        <div>
          <label className='email-signin' htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className='sign-in-input' // Add className for styling
          />
        </div>
        <div>
          <label className='password-signin' htmlFor="password">Password: </label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className='sign-in-input' // Add className for styling
          />
        </div>
        <button type="submit" className='sign-in-submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
