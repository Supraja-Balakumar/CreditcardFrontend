// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import './Generatecard.css'; // Add your CSS file for styling

// const Generatecard = () => {
//   const [records, setRecords] = useState([]);
//   const [id,setId] = useState([]);
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

//   const navigate = useNavigate(); // Single navigate declaration

//   const location = useLocation();
//   const {cardreq} = location.state || {}

//   useEffect(() => {
//     loadData();
//     console.log(cardreq);
//     setInputData({...inputData, cardholderName: cardreq.user.name})
//     setInputData({...inputData, user: cardreq.user})
//   }, []);

//   const loadData = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/user/idlist");
//       setRecords(res.data);
//     } catch (err) {
//       console.error("Error fetching ID list:", err);
//     }
//   };

//   // const handleUserChange = async (e) => {
//   //   const userId = e.target.value;
//   //   setInputData((prevData) => ({
//   //     ...prevData,
//   //     user: { ...prevData.user, id: userId }
//   //   }));

//   //   try {
//   //     const res = await axios.get(`http://localhost:8000/user/${userId}`);
//   //     setInputData((prevData) => ({
//   //       ...prevData,
//   //       user: { ...res.data }
//   //     }));
//   //   } catch (err) {
//   //     console.error("Error fetching user data:", err);
//   //   }
//   // };

//   // useEffect(() => {
//   //     axios.get(`http://localhost:8000/user/${cardreq.user.id}`)
//   //       .then(response => {
//   //         console.log(response.data);
//   //         setInputData(prevData => ({
//   //           ...prevData,
//   //           cardholderName: response.data.name // Assuming the name is fetched from user data
//   //         }));
//   //       })
//   //       .catch(error => {
//   //         console.error('Error fetching user data:', error);
//   //       });
    
//   // }, [cardreq.user.id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };

//   const validateCardNumber = (number) => {
//     return /^\d{16}$/.test(number);
//   };

//   const validateExpirationDate = (date) => {
//     const [month, year] = date.split('/').map(num => parseInt(num, 10));
//     const currentDate = new Date();
//     const expirationDate = new Date(year + 2000, month - 1);

//     return expirationDate >= currentDate; // Check if the expiration date is in the future
//   };

//   const validateCVV = (cvv) => {
//     return /^\d{3}$/.test(cvv);
//   };

//   const handleGenerateCard = async (e) => {
//     e.preventDefault();
    
//     if (!validateCardNumber(inputData.cardnumber)) {
//       alert('Card number must be exactly 16 digits.');
//       return;
//     }

//     if (!validateExpirationDate(inputData.expirationDate)) {
//       alert('Expiration date must be in the future.');
//       return;
//     }

//     if (!validateCVV(inputData.cvv)) {
//       alert('CVV must be exactly 3 digits.');
//       return;
//     }

//     await axios.post('http://localhost:8000/creditcard', inputData)
//       .then(response => {
//         console.log(response.data);
//         setId( response.data);
//       })
//       .then(() => {
//         alert('Card generated and status updated successfully!');
//       })
//       .catch(error => {
//         // console.error('Error generating card or updating status:', error);
//       });

//       const cardStatus = new FormData();
//       cardStatus.append('cardStatus', "Approved");

//     await axios.put(`http://localhost:8000/cardreq/${cardreq.cardid}`, cardStatus)
//     .then(response => {
//       console.log(response.data);
//       navigate("/managecard"); // Navigate to the ManageCard page after success
//     })
//     .catch(() => {
//       alert('Error updating card status');
//     })
//   };

//   return (
//     <div className="creditcard-form-container">
//       <form onSubmit={handleGenerateCard} className="creditcard-form">
//         <h1>Generate Credit Card</h1>
//         <div className="form-group">
//           <label htmlFor="cardholderName">Cardholder Name</label>
//           <input
//             type="text"
//             id="cardholderName"
//             name="cardholderName"
//             value={cardreq.user.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cardnumber">Card Number</label>
//           <input
//             type="text"
//             id="cardnumber"
//             name="cardnumber"
//             value={inputData.cardnumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="expirationDate">Expiration Date</label>
//           <input
//             type="text"
//             id="expirationDate"
//             name="expirationDate"
//             value={inputData.expirationDate}
//             onChange={handleChange}
//             placeholder="MM/YY"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cvv">CVV</label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             value={inputData.cvv}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="generate-card-btn">Generate Card</button>
//       </form>
//     </div>
//   );
// };

// export default Generatecard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import './Generatecard.css'; // Add your CSS file for styling

const Generatecard = () => {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    cardholderName: '',
    cardnumber: '',
    expirationDate: '',
    cvv: '',
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

  const [focus, setFocus] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { cardreq } = location.state || {};

  useEffect(() => {
    loadData();
    if (cardreq) {
      setInputData({
        ...inputData,
        cardholderName: cardreq.user.name,
        user: cardreq.user
      });
    }
  }, [cardreq]);

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/user/idlist");
      setRecords(res.data);
    } catch (err) {
      console.error("Error fetching ID list:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  const validateCardNumber = (number) => {
    return /^\d{16}$/.test(number);
  };

  const validateExpirationDate = (date) => {
    const [month, year] = date.split('/').map(num => parseInt(num, 10));
    const currentDate = new Date();
    const expirationDate = new Date(year + 2000, month - 1);
    return expirationDate >= currentDate;
  };

  const validateCVV = (cvv) => {
    return /^\d{3}$/.test(cvv);
  };

  const handleGenerateCard = async (e) => {
    e.preventDefault();

    if (!validateCardNumber(inputData.cardnumber)) {
      alert('Card number must be exactly 16 digits.');
      return;
    }

    if (!validateExpirationDate(inputData.expirationDate)) {
      alert('Expiration date must be in the future.');
      return;
    }

    if (!validateCVV(inputData.cvv)) {
      alert('CVV must be exactly 3 digits.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/creditcard', inputData);
      console.log(response.data);

      const cardStatus = new FormData();
      cardStatus.append('cardStatus', "Approved");

      await axios.put(`http://localhost:8000/cardreq/${cardreq.cardid}`, cardStatus);
      alert('Card generated and status updated successfully!');
      navigate("/managecard");
    } catch (error) {
      console.error('Error generating card or updating status:', error);
    }
  };

  return (
    <div className="creditcard-form-container">
      <Cards
        number={inputData.cardnumber}
        expiry={inputData.expirationDate}
        cvc={inputData.cvv}
        name={inputData.cardholderName}
        focused={focus}
      />
      <div className="mt-3">
        <form onSubmit={handleGenerateCard} className="creditcard-form">
          <div className="mb-3">
            <input
              type="number"
              name="cardnumber"
              className="form-control"
              placeholder="Card Number"
              value={inputData.cardnumber}
              onChange={handleChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="cardholderName"
              className="form-control"
              placeholder="Cardholder Name"
              value={inputData.cardholderName}
              onChange={handleChange}
              onFocus={handleInputFocus}
              required
            />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text"
                name="expirationDate"
                className="form-control"
                placeholder="MM/YY"
                pattern="\d\d/\d\d"
                value={inputData.expirationDate}
                onChange={handleChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
            <div className="col-6 mb-3">
              <input
                type="text"
                name="cvv"
                className="form-control"
                placeholder="CVV"
                pattern="\d{3}"
                value={inputData.cvv}
                onChange={handleChange}
                onFocus={handleInputFocus}
                required
              />
            </div>
          </div>
          <div className="d-gri">
            <button type="submit" className="btn btn-dark">Generate Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Generatecard;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Cards from "react-credit-cards-2";
// import "react-credit-cards-2/dist/es/styles-compiled.css";
// import './Generatecard.css'; // Add your CSS file for styling

// const Generatecard = () => {
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
//     if (cardreq) {
//       setInputData({
//         ...inputData,
//         cardholderName: cardreq.user.name,
//         user: cardreq.user
//       });
//     }
//   }, [cardreq]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };

//   const handleInputFocus = (e) => {
//     setFocus(e.target.name);
//   };

//   const validateCardNumber = (number) => {
//     return /^\d{16}$/.test(number);
//   };

//   const validateExpirationDate = (date) => {
//     const [month, year] = date.split('/').map(num => parseInt(num, 10));
//     const currentDate = new Date();
//     const expirationDate = new Date(year + 2000, month - 1);
//     return expirationDate >= currentDate;
//   };

//   const validateCVV = (cvv) => {
//     return /^\d{3}$/.test(cvv);
//   };

//   const handleGenerateCard = async (e) => {
//     e.preventDefault();

//     if (!validateCardNumber(inputData.cardnumber)) {
//       alert('Card number must be exactly 16 digits.');
//       return;
//     }

//     if (!validateExpirationDate(inputData.expirationDate)) {
//       alert('Expiration date must be in the future.');
//       return;
//     }

//     if (!validateCVV(inputData.cvv)) {
//       alert('CVV must be exactly 3 digits.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:8000/creditcard', inputData);

//       const cardStatus = new FormData();
//       cardStatus.append('cardStatus', "Approved");

//       await axios.put(`http://localhost:8000/cardreq/${cardreq.cardid}`, cardStatus);

//       // Optionally notify the user about the card approval via a notification or email
//       alert('Card generated and status updated successfully!');
//     } catch (error) {
//       console.error('Error generating card or updating status:', error);
//     }
//   };

//   return (
//     <div className="creditcard-form-container">
//       <div className="mt-3">
//         <form onSubmit={handleGenerateCard} className="creditcard-form">
//           <div className="mb-3">
//             <input
//               type="number"
//               name="cardnumber"
//               className="form-control"
//               placeholder="Card Number"
//               value={inputData.cardnumber}
//               onChange={handleChange}
//               onFocus={handleInputFocus}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               name="cardholderName"
//               className="form-control"
//               placeholder="Cardholder Name"
//               value={inputData.cardholderName}
//               onChange={handleChange}
//               onFocus={handleInputFocus}
//               required
//             />
//           </div>
//           <div className="row">
//             <div className="col-6 mb-3">
//               <input
//                 type="text"
//                 name="expirationDate"
//                 className="form-control"
//                 placeholder="MM/YY"
//                 pattern="\d\d/\d\d"
//                 value={inputData.expirationDate}
//                 onChange={handleChange}
//                 onFocus={handleInputFocus}
//                 required
//               />
//             </div>
//             <div className="col-6 mb-3">
//               <input
//                 type="text"
//                 name="cvv"
//                 className="form-control"
//                 placeholder="CVV"
//                 pattern="\d{3}"
//                 value={inputData.cvv}
//                 onChange={handleChange}
//                 onFocus={handleInputFocus}
//                 required
//               />
//             </div>
//           </div>
//           <div className="d-grid">
//             <button type="submit" className="btn btn-dark">Generate Card</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Generatecard;
