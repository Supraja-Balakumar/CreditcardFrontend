import axios from 'axios';
import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './Signupacc.css'

const Signupacc = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    dob: "",
    city: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = validateValues(inputData);
    if (result === true) {
      console.log(inputData);
      axios
        .post("http://localhost:8000/user/register", inputData)
        .then((res) => {
          alert("Registration Successful!");
          console.log(res.data);
          navigate("/loginacc");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Enter the Valid Inputs!!!");
    }
  };


  const validateValues = (data) => {
    if (data.name.trim().length === 0) {
      alert("Name cannot be empty.");
      return false;
    } else if (!isAgeAbove18(data.dob)) {
      alert("You must be at least 18 years old.");
      return false;
    } else if (data.city.trim().length === 0) {
      alert("City cannot be empty.");
      return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(data.email)) {
      alert("Email must be a valid Gmail address.");
      return false;
    } else if (!/^\d{10}$/.test(data.mobile)) {
      alert("Mobile number must be exactly 10 digits.");
      return false;
    } else if (!isValidPassword(data.password)) {
      alert("Password must be at least 10 characters long and include at least 3 numbers.");
      return false;
    } else {
      return true;
    }
  };

  const isAgeAbove18 = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      // age--;
    }
    return age >= 18;
  };

  const isValidPassword = (password) => {
    const maxLength = 10;
    const minAlphabets = 3;
    const minNumbers = 1;
    const maxNumbers = 3;

    const hasMaxLength = password.length <= maxLength;
    const hasMinAlphabets = (password.match(/[a-zA-Z]/g) || []).length >= minAlphabets;
    const numCount = (password.match(/\d/g) || []).length;
    const hasMinNumbers = numCount >= minNumbers && numCount <= maxNumbers;

    return hasMaxLength && hasMinAlphabets && hasMinNumbers;
  };

  return (
    <div className="container Signupcontainer">
      <h2 className="title">Sign up</h2>
      <form onSubmit={handleSubmit}>
        <h1 className="register-title">REGISTER</h1>
        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, dob: e.target.value })}
            placeholder="Enter date of birth"
          />
        </div>

        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, city: e.target.value })}
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, mobile: e.target.value })}
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="form-group signupfirst">
          <label className='signuplabel' htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control signupformcontrol"
            onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
            placeholder="Enter your password"
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary">Sign up</button>
        <p>Already have an account? <a href="/loginacc">Login</a></p>
      </form>
    </div>
  );
};

export default Signupacc;