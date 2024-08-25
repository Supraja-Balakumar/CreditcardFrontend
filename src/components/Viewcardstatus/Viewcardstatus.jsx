// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Viewcardstatus.css'; // Make sure to use the correct CSS file
// // import { useNavigate } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// // const Viewcardstatus = () => {
// //   const [cardRequests, setCardRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [sessionID, setSessionID] = useState(null); // State to hold session ID
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Simulate fetching session ID (replace this with actual session retrieval logic)
// //     const fetchedSessionID = 'user-session-id'; // Replace with actual session ID logic
// //     setSessionID(fetchedSessionID);

// //     axios.get('http://localhost:8000/cardreq/all')
// //       .then(response => {
// //         setCardRequests(response.data);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching card requests:', error);
// //         setLoading(false); // Ensure loading is false even if there’s an error
// //       });
// //   }, []);

// //   const handleApprove = (id) => {
// //     axios.get(`http://localhost:8000/cardreq/${id}`)
// //       .then(response => {
// //         const cardreq = response.data;
// //         navigate("/generatecard", { state: { cardreq } });
// //       })
// //       .catch(error => {
// //         console.error('Error approving card request:', error);
// //       });
// //   };

// //   const handleReject = (id) => {
// //     axios.put(`http://localhost:8000/cardreq/all/${id}`, { cardStatus: 'Rejected' })
// //       .then(response => {
// //         const updatedCardRequests = cardRequests.map(cardRequest => {
// //           if (cardRequest.cardid === id) {
// //             return { ...cardRequest, cardStatus: 'Rejected' };
// //           }
// //           return cardRequest;
// //         });
// //         setCardRequests(updatedCardRequests);
// //       })
// //       .catch(error => {
// //         console.error('Error rejecting card request:', error);
// //       });
// //   };

// //   if (loading) {
// //     return <div className="loading">Loading...</div>;
// //   }

// //   // Filter card requests based on the session ID
// //   const filteredCardRequests = cardRequests.filter(
// //     request => request.sessionId === sessionID
// //   );

  
// // // Inline CSS for Navbar
// // const styles = {
// //     navbar: {
// //       backgroundColor: '#333',
// //       padding: '10px',
// //       color: 'white',
// //       position: 'sticky',
// //       top: '0',
// //       width: '100%',
// //       zIndex: '1000',
// //     },
// //     navList: {
// //       listStyleType: 'none',
// //       padding: 0,
// //       margin: 0,
// //       display: 'flex',
// //       justifyContent: 'space-around',
// //     },
// //     navItem: {
// //       margin: '0 15px',
// //     },
// //     navLink: {
// //       color: 'white',
// //       textDecoration: 'none',
// //       fontSize: '18px',
// //       fontWeight: 'bold',
// //     },
// //   };

// //   const handleLogout = () =>{
// //     sessionStorage.clear();
// //   }

// //   return (
// //     <div className="container-fluid userpagecontainer">
// //       {/* Navbar */}
// //       <nav style={styles.navbar}>
// //         <ul style={styles.navList}>
// //           <li style={styles.navItem}>
// //             <Link to="/" style={styles.navLink}>Home</Link>
// //           </li>
// //           <li style={styles.navItem}>
// //             <Link to="/about" style={styles.navLink}>About</Link>
// //           </li>
// //           <li style={styles.navItem}>
// //             <Link to="/contact" style={styles.navLink}>Contact</Link>
// //           </li>
// //           <li style={styles.navItem}>
// //             <Link to="/userpage" style={styles.navLink}>Dashboard</Link>
// //           </li>

// //           <li style={styles.navItem}>
// //             <Link to="/loginacc" style={styles.navLink} onClick={handleLogout}>Logout</Link>
// //           </li>
// //         </ul>
// //       </nav>

// //     <div className="viewcardstatus-container">
// //       <h1>Your Card status</h1>
// //       <table className="viewcardstatus-table">
// //         <thead>
// //           <tr>
// //             <th>Card Type</th>
// //             <th>Job Title</th>
// //             <th>Annual Income</th>
// //             <th>Account Type</th>
// //             <th>Account Number</th>
// //             <th>Status</th>
// //             <th>User Name</th>
// //             <th>User Email</th>
// //             {/* <th>Status</th> */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredCardRequests.map(cardRequest => (
// //             <tr key={cardRequest.cardid}>
// //               <td>{cardRequest.cardtype}</td>
// //               <td>{cardRequest.jobTitle}</td>
// //               <td>{cardRequest.annualIncome}</td>
// //               <td>{cardRequest.accountType}</td>
// //               <td>{cardRequest.accountNumber}</td>
// //               <td>
// //                 <span className={`status ${cardRequest.cardStatus.toLowerCase()}`}>
// //                   {cardRequest.cardStatus}
// //                 </span>
// //               </td>
// //               <td>{cardRequest.user.name}</td>
// //               <td>{cardRequest.user.email}</td>
// //               <td className="actions">
// //                 {cardRequest.cardStatus === 'Pending' && (
// //                   <>
// //                     <button className="approve-btn" onClick={() => handleApprove(cardRequest.cardid)}>
// //                       Generate Card
// //                     </button>
// //                     <button className="reject-btn" onClick={() => handleReject(cardRequest.cardid)}>Reject</button>
// //                   </>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //     </div>
// //   );
// // };


  
// // export default Viewcardstatus;














// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
// import './Viewcardstatus.css'; // Add your CSS file for styling

// const ViewCardStatus = () => {
//   const location = useLocation();
//   const { card } = location.state || {};

//   if (!card) {
//     return <p>No card data available.</p>;
//   }

//   return (
//     <div className="card-status-container">
//       <h2>Card Generated Successfully!</h2>
//       <Cards
//         number={card.number}
//         expiry={card.expiry}
//         cvc={card.cvc}
//         name={card.name}
//         focused="number"
//       />
//       <div className="card-details">
//         <p><strong>Card Number:</strong> {card.number}</p>
//         <p><strong>Expiration Date:</strong> {card.expiry}</p>
//         <p><strong>CVV:</strong> {card.cvc}</p>
//         <p><strong>Cardholder Name:</strong> {card.name}</p>
//       </div>
//     </div>
//   );
// };

// export default ViewCardStatus;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Cards from "react-credit-cards-2";
// // import "react-credit-cards-2/dist/es/styles-compiled.css";
// // import './Viewcardstatus.css'; // Add your CSS file for styling

// // const ViewCardStatus = () => {
// //   const [card, setCard] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Fetch the card details from backend
// //     const fetchCardDetails = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8000/user/carddetails'); // Adjust URL based on your backend
// //         setCard(response.data);
// //       } catch (error) {
// //         console.error('Error fetching card details:', error);
// //         // Optionally redirect to another page or show an error message
// //       }
// //     };

// //     fetchCardDetails();
// //   }, []);

// //   if (!card) {
// //     return <p>Loading card details...</p>;
// //   }

// //   return (
// //     <div className="card-status-container">
// //       <h2>Your Card Details</h2>
// //       <Cards
// //         number={card.number}
// //         expiry={card.expiry}
// //         cvc={card.cvc}
// //         name={card.name}
// //         focused="number"
// //       />
// //       <div className="card-details">
// //         <p><strong>Card Number:</strong> {card.number}</p>
// //         <p><strong>Expiration Date:</strong> {card.expiry}</p>
// //         <p><strong>CVV:</strong> {card.cvc}</p>
// //         <p><strong>Cardholder Name:</strong> {card.name}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewCardStatus;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
// import './Viewcardstatus.css'; // Add your CSS file for styling

// const ViewCardStatus = () => {
//   const [records, setRecords] = useState([]);
//   const [inputData, setInputData] = useState({
//     cardholderName: '',
//     cardnumber: '',
//     expirationDate: '',
//     cvv: '',
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

//   const [focus, setFocus] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cardreq } = location.state || {};

//   useEffect(() => {
//     loadData();
//     if (cardreq) {
//       setInputData({
//         ...inputData,
//         cardholderName: cardreq.user.name,
//         user: cardreq.user
//       });
//     }
//   }, [cardreq]);

//   const loadData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/creditcard/idlist");
//       console.log(cardreq);
//       setRecords(res.data);
//       console.log(res.data);
//     } catch (err) {
//       console.error("Error fetching ID list:", err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };

  // const handleInputFocus = (e) => {
  //   setFocus(e.target.name);
  // };

  // const validateCardNumber = (number) => {
  //   return /^\d{16}$/.test(number);
  // };

  // const validateExpirationDate = (date) => {
  //   const [month, year] = date.split('/').map(num => parseInt(num, 10));
  //   const currentDate = new Date();
  //   const expirationDate = new Date(year + 2000, month - 1);
  //   return expirationDate >= currentDate;
  // };

  // const validateCVV = (cvv) => {
  //   return /^\d{3}$/.test(cvv);
  // };

  // const handleGenerateCard = async (e) => {
  //   e.preventDefault();

  //   if (!validateCardNumber(inputData.cardnumber)) {
  //     alert('Card number must be exactly 16 digits.');
  //     return;
  //   }

  //   if (!validateExpirationDate(inputData.expirationDate)) {
  //     alert('Expiration date must be in the future.');
  //     return;
  //   }

  //   if (!validateCVV(inputData.cvv)) {
  //     alert('CVV must be exactly 3 digits.');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:8000/creditcard', inputData);
  //     console.log(response.data);

  //     const cardStatus = new FormData();
  //     cardStatus.append('cardStatus', "Approved");

  //     await axios.put(`http://localhost:8000/cardreq/${cardreq.cardid}`, cardStatus);
  //     alert('Card generated and status updated successfully!');
  //     navigate("/managecard");
  //   } catch (error) {
  //     console.error('Error generating card or updating status:', error);
  //   }
  // };

//   return (
//     <div className="creditcard-form-container">
//       <Cards
//         number={inputData.cardnumber}
//         expiry={inputData.expirationDate}
//         cvc={inputData.cvv}
//         name={inputData.cardholderName}
//         focused={focus}
//       />
//       <div className="mt-3">
//         <form onSubmit={handleGenerateCard} className="creditcard-form">
//           <div className="mb-3">
//             <input
//               type="hidden"
//               name="cardnumber"
//               className="form-control"
//               placeholder="Card Number"
//               value={inputData.cardnumber}
//               //onChange={handleChange}
//               onFocus={handleInputFocus}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="hidden"
//               name="cardholderName"
//               className="form-control"
//               placeholder="Cardholder Name"
//               value={inputData.cardholderName}
//               //onChange={handleChange}
//               //onFocus={handleInputFocus}
//               required
//             />
//           </div>
//           <div className="row">
//             <div className="col-6 mb-3">
//               <input
//                 type="hidden"
//                 name="expirationDate"
//                 className="form-control"
//                 placeholder="MM/YY"
//                 pattern="\d\d/\d\d"
//                 value={inputData.expirationDate}
//                 //onChange={handleChange}
//                 //onFocus={handleInputFocus}
//                 required
//               />
//             </div>
//             <div className="col-6 mb-3">
//               <input
//                 type="hidden"
//                 name="cvv"
//                 className="form-control"
//                 placeholder="CVV"
//                 pattern="\d{3}"
//                 value={inputData.cvv}
//                 //onChange={handleChange}
//                 onFocus={handleInputFocus}
//                 required
//               />
//             </div>
//           </div>
//           {/* <div className="d-gri">
//             <button type="submit" className="btn btn-dark">Generate Card</button>
//           </div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ViewCardStatus;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
// import './Viewcardstatus.css'; // Add your CSS file for styling

// const ViewCardStatus = () => {
//   const [cardDetails, setCardDetails] = useState({
//     cardholderName: '',
//     cardnumber: '',
//     expirationDate: '',
//     cvv: ''
//   });
//   const [focus, setFocus] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the user ID from session storage
//     const userId = sessionStorage.getItem("userId");
//     if (userId) {
//       fetchCardDetails(userId);
//     } else {
//       alert('User ID not found in session.');
//     }
//   }, []);

//   const fetchCardDetails = async (userId) => {
//     try {
//       // Replace with your actual endpoint to fetch card details
//       const res = await axios.get(`http://localhost:8000/creditcard/user/${userId}`);
//       setCardDetails(res.data);
//     } catch (err) {
//       console.error("Error fetching card details:", err);
//     }
//   };

//   const handleInputFocus = (e) => {
//     setFocus(e.target.name);
//   };

//   return (
//     <div className="creditcard-form-container">
//       <Cards
//         number={cardDetails.cardnumber}
//         expiry={cardDetails.expirationDate}
//         cvc={cardDetails.cvv}
//         name={cardDetails.cardholderName}
//         focused={focus}
//       />
//       <div className="mt-3">
//         {/* You may add any additional UI or actions here if needed */}
//       </div>
//     </div>
//   );
// };

// export default ViewCardStatus;





//*-----------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './Viewcardstatus.css'; // Add your CSS file for styling

const ViewCardStatus = () => {
  const [cardDetails, setCardDetails] = useState(null); // Changed initial state to null
  const [focus, setFocus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user ID from session storage
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      fetchCardDetails(userId);
    } else {
      alert('User ID not found in session.');
    }
  }, []);

  const fetchCardDetails = async (userId) => {
    try {
      // Replace with your actual endpoint to fetch card details
      const res = await axios.get(`http://localhost:8000/creditcard/user/${userId}`);
      if (res.data) {
        setCardDetails(res.data);
      } else {
        setCardDetails(null); // Explicitly set to null if no data
      }
    } catch (err) {
      console.error("Error fetching card details:", err);
      setCardDetails(null); // Set to null in case of an error
    }
  };

  const handleLogout = () =>{
    sessionStorage.clear();
  }

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

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
  
  return (
    <div className="container-fluid userpagecontainer ">
      {/* Navbar */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/viewcardstatus" style={styles.navLink}>My Cards</Link>
          </li>
          {/* <li style={styles.navItem}>
            <Link to="/userpage" style={styles.navLink}>Dashboard</Link>
          </li> */}

          
<li style={styles.navItem}>
            <Link to="/loginacc" style={styles.navLink} onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </nav>
    <div className="creditcard-form-container">
      {cardDetails ? (
        <Cards
          number={cardDetails.cardnumber}
          expiry={cardDetails.expirationDate}
          cvc={cardDetails.cvv}
          name={cardDetails.cardholderName}
          focused={focus}
        />
      ) : (
        <div className="no-card-details">
          <p>No card details available</p>
        </div>
      )}
      <div className="mt-3">
        {/* You may add any additional UI or actions here if needed */}
      </div>
    </div>
    </div>
  );
};

export default ViewCardStatus;
