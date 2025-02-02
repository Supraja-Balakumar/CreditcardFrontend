// src/components/UserReg.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Userreg.css';

const Userreg = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    mobile: '',
    password: '',
    cardrequest: {
      cardid: null, // Assuming cardid is generated by the backend
      cardtype: 'Credit', // Default value or you can make it dynamic
      cardstatus: 'Pending' // Default value or you can make it dynamic
    }
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/users/register', formData);
      setFormData({
        name: '',
        city: '',
        email: '',
        mobile: '',
        password: '',
        cardrequest: {
          cardid: null,
          cardtype: 'Credit',
          cardstatus: 'Pending'
        }
      });
      setError('');
      alert('Registration successful!');
    } catch (error) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="usercard-container ">
      <div className="card usercard">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Userreg;
