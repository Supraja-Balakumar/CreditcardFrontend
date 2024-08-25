
// import React, { useState, useEffect } from 'react';
// import './CardApply.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function CardApply() {
//   const [records, setRecords] = useState([]);
//   const [inputData, setInputData] = useState({
//     cardreqid: "",
//     cardtype: "",
//     jobTitle: "",
//     annualIncome: "",
//     accountType: "",
//     accountNumber: "",
//     cardStatus: "Pending",
//     user: {
//       id: "",
//       name: "",
//       dob: "",
//       city: "",
//       email: "",
//       mobile: "",
//       password: ""
//     }
//   });

//   const [isCustomJobTitle, setIsCustomJobTitle] = useState(false);

//   const jobList = [
//     "Software Engineer",
//     "Data Scientist",
//     "Product Manager",
//     "Graphic Designer",
//     "Marketing Specialist",
//     "Sales Executive",
//     "HR Manager",
//     "Finance Analyst",
//     "Consultant",
//     "Customer Support",
//     "Others" // Option for manual entry
//   ];

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/user/idlist");
//       setRecords(res.data);
//     } catch (err) {
//       console.error("Error fetching ID list:", err);
//     }
//   };

//   const handleUserChange = async (e) => {
//     const userId = e.target.value;
//     setInputData((prevData) => ({
//       ...prevData,
//       user: { ...prevData.user, id: userId }
//     }));

//     try {
//       const res = await axios.get(`http://localhost:8000/user/${userId}`);
//       setInputData((prevData) => ({
//         ...prevData,
//         user: { ...res.data }
//       }));
//     } catch (err) {
//       console.error("Error fetching user data:", err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "jobTitle") {
//       if (value === "Others") {
//         setIsCustomJobTitle(true);
//         setInputData((prevData) => ({
//           ...prevData,
//           jobTitle: ""
//         }));
//       } else {
//         setIsCustomJobTitle(false);
//         setInputData((prevData) => ({
//           ...prevData,
//           jobTitle: value
//         }));
//       }
//     } else {
//       setInputData((prevData) => ({
//         ...prevData,
//         [name]: value
//       }));
//     }
//   };

//   const handleManualJobTitleChange = (e) => {
//     setInputData((prevData) => ({
//       ...prevData,
//       jobTitle: e.target.value
//     }));
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = validateValues(inputData);
//     if (result === true) {
//       try {
//         const res = await axios.post("http://localhost:8000/cardreq", inputData);
//         alert("Card requested successfully!");
//         navigate("/userpage");
//       } catch (err) {
//         console.error("Error submitting form:", err);
//       }
//     } else {
//       alert("Please Enter Valid Inputs!!!");
//     }
//   };

//   const validateValues = (inputData) => {
//     if (inputData.jobTitle.length === 0) {
//       alert("Please select or enter a job title.");
//       return false;
//     } else if (inputData.annualIncome.length === 0) {
//       alert("Please enter your annual income.");
//       return false;
//     } else if (parseInt(inputData.annualIncome, 10) < 500000 && inputData.cardtype === "Gold") {
//       alert("For a Gold card, annual income must be at least 5 lakh.");
//       return false;
//     } else if (inputData.accountNumber.length !== 11) {
//       alert("Account number must be exactly 11 digits.");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <div className="container card_applycontainer">
//       <form onSubmit={handleSubmit}>
//         <h1>Card Request Form</h1>

//         <div className="form-group">
//           <label htmlFor="cardtype">Card Type:</label>
//           <select
//             id="cardtype"
//             name="cardtype"
//             value={inputData.cardtype}
//             onChange={handleChange}
//           >
//             <option value="">Select Card Type</option>
//             <option value="Visa">Visa</option>
//             <option value="Mastercard">Mastercard</option>
//             <option value="Gold">Gold</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="jobTitle">Job Title:</label>
//           <select
//             id="jobTitle"
//             name="jobTitle"
//             value={inputData.jobTitle}
//             onChange={handleChange}
//           >
//             {jobList.map((job) => (
//               <option key={job} value={job}>{job}</option>
//             ))}
//           </select>
//           {isCustomJobTitle && (
//             <input
//               type="text"
//               id="manualJobTitle"
//               name="manualJobTitle"
//               placeholder="Enter your job title"
//               onChange={handleManualJobTitleChange}
//               value={inputData.jobTitle}
//             />
//           )}
//         </div>

//         <div className="form-group">
//           <label htmlFor="annualIncome">Annual Income:</label>
//           <input
//             type="number"
//             id="annualIncome"
//             name="annualIncome"
//             value={inputData.annualIncome}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="accountType">Account Type:</label>
//           <select
//             id="accountType"
//             name="accountType"
//             value={inputData.accountType}
//             onChange={handleChange}
//           >
//             <option value="">Select Account Type</option>
//             <option value="Savings">Savings</option>
//             <option value="Current">Current</option>
//             <option value="Credit">Credit</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="accountNumber">Account Number:</label>
//           <input
//             type="text"
//             id="accountNumber"
//             name="accountNumber"
//             value={inputData.accountNumber}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="cardStatus">Card Status:</label>
//           <select
//             id="cardStatus"
//             name="cardStatus"
//             value={inputData.cardStatus}
//             disabled
//           >
//             <option value="Pending">Pending</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="id">User ID:</label>
//           <select
//             className="form-select"
//             required
//             name="id"
//             value={inputData.user.id}
//             onChange={handleUserChange}
//           >
//             <option value="">Select One</option>
//             {records.map((item) => (
//               <option value={item} key={item}>{item}</option>
//             ))}
//           </select>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CardApply;
 
import React, { useState, useEffect } from 'react';
import './CardApply.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CardApply() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    cardreqid: "",
    cardtype: "",
    jobTitle: "",
    annualIncome: "",
    accountType: "",
    accountNumber: "",
    cardStatus: "Pending",
    user: {
      id: "",
      name: "",
      dob: "",
      city: "",
      email: "",
      mobile: "",
      password: ""
    }
  });

  const [isCustomJobTitle, setIsCustomJobTitle] = useState(false);
  const [userId, setUserId] = useState();

  const jobList = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Graphic Designer",
    "Marketing Specialist",
    "Sales Executive",
    "HR Manager",
    "Finance Analyst",
    "Consultant",
    "Customer Support",
    "Others" // Option for manual entry
  ];

  useEffect(() => {
    console.log(sessionStorage.getItem("userId"));
    handleUserChange(sessionStorage.getItem("userId"));
    // loadData();
  }, []);

  // const loadData = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8000/user/idlist");
  //     setRecords(res.data);
  //   } catch (err) {
  //     console.error("Error fetching ID list:", err);
  //   }
  // };

  const handleUserChange = async (e) => {
    const userId = e;
    setInputData((prevData) => ({
      ...prevData,
      user: { ...prevData.user, id: userId }
    }));

    try {
      const res = await axios.get(`http://localhost:8000/user/${userId}`);
      setInputData((prevData) => ({
        ...prevData,
        user: { ...res.data }
      }));
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "jobTitle") {
      if (value === "Others") {
        setIsCustomJobTitle(true);
        setInputData((prevData) => ({
          ...prevData,
          jobTitle: ""
        }));
      } else {
        setIsCustomJobTitle(false);
        setInputData((prevData) => ({
          ...prevData,
          jobTitle: value
        }));
      }
    } else {
      setInputData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleManualJobTitleChange = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      jobTitle: e.target.value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = validateValues(inputData);
    if (result === true) {
      try {
        const res = await axios.post("http://localhost:8000/cardreq", inputData);
        alert("Card requested successfully!");
        navigate("/userpage");
      } catch (err) {
        console.error("Error submitting form:", err);
      }
    } else {
      alert("Please Enter Valid Inputs!!!");
    }
  };

  const validateValues = (inputData) => {
    if (inputData.jobTitle.length === 0) {
      alert("Please select or enter a job title.");
      return false;
    } else if (inputData.annualIncome.length === 0) {
      alert("Please enter your annual income.");
      return false;
    } else if (parseInt(inputData.annualIncome, 10) < 500000 && inputData.cardtype === "Gold") {
      alert("For a Gold card, annual income must be at least 5 lakh.");
      return false;
    } else if (inputData.accountNumber.length !== 11) {
      alert("Account number must be exactly 11 digits.");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="container card_applycontainer">
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="/" style={styles.navLink}>Home</a>
          </li>
          <li style={styles.navItem}>
            <a href="/about" style={styles.navLink}>About</a>
          </li>
          <li style={styles.navItem}>
            <a href="/contact" style={styles.navLink}>Contact</a>
          </li>
          <li style={styles.navItem}>
            <a href="/userpage" style={styles.navLink}>Dashboard</a>
          </li>
        </ul>
      </nav>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <h1>Card Request Form</h1>

        <div className="form-group">
          <label htmlFor="cardtype">Card Type:</label>
          <select
            id="cardtype"
            name="cardtype"
            value={inputData.cardtype}
            onChange={handleChange}
          >
            <option value="">Select Card Type</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Gold">Gold</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <select
            id="jobTitle"
            name="jobTitle"
            value={inputData.jobTitle}
            onChange={handleChange}
          >
            {jobList.map((job) => (
              <option key={job} value={job}>{job}</option>
            ))}
          </select>
          {isCustomJobTitle && (
            <input
              type="text"
              id="manualJobTitle"
              name="manualJobTitle"
              placeholder="Enter your job title"
              onChange={handleManualJobTitleChange}
              value={inputData.jobTitle}
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="annualIncome">Annual Income:</label>
          <input
            type="number"
            id="annualIncome"
            name="annualIncome"
            value={inputData.annualIncome}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="accountType">Account Type:</label>
          <select
            id="accountType"
            name="accountType"
            value={inputData.accountType}
            onChange={handleChange}
          >
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
            <option value="Credit">Credit</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={inputData.accountNumber}
            onChange={handleChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="cardStatus">Card Status:</label>
          <select
            id="cardStatus"
            name="cardStatus"
            value={inputData.cardStatus}
            disabled
          >
            <option value="Pending">Pending</option>
          </select>
        </div> */}
{/* 
        <div className="form-group">
          <label htmlFor="id">User ID:</label>
          <select
            className="form-select"
            required
            name="id"
            value={inputData.user.id}
            onChange={handleUserChange}
          >
            <option value="">Select One</option>
            {records.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Inline CSS for Navbar
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
    position: 'sticky',
    top: '0',
    width: '100%',
    zIndex: '1000',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default CardApply;
