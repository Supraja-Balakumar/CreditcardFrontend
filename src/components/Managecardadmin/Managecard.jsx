// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Managecard.css';

// const Managecard = () => {
//   const [cardRequests, setCardRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('http://localhost:8000/cardreq/all')
//       .then(response => {
//         setCardRequests(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching card requests:', error);
//         setLoading(false); // Ensure loading is false even if there’s an error
//       });
//   }, []);

//   const handleApprove = (id) => {
//     axios.put(`http://localhost:8000/cardreq/all/${id}`, { cardStatus: 'Approved' })
//       .then(response => {
//         const updatedCardRequests = cardRequests.map(cardRequest => {
//           if (cardRequest.cardid === id) {
//             return { ...cardRequest, cardStatus: 'Approved' };
//           }
//           return cardRequest;
//         });
//         setCardRequests(updatedCardRequests);
//       })
//       .catch(error => {
//         console.error('Error approving card request:', error);
//       });
//   };

//   const handleReject = (id) => {
//     axios.put(`http://localhost:8000/cardreq/all/${id}`, { cardStatus: 'Rejected' })
//       .then(response => {
//         const updatedCardRequests = cardRequests.map(cardRequest => {
//           if (cardRequest.cardid === id) {
//             return { ...cardRequest, cardStatus: 'Rejected' };
//           }
//           return cardRequest;
//         });
//         setCardRequests(updatedCardRequests);
//       })
//       .catch(error => {
//         console.error('Error rejecting card request:', error);
//       });
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Card Requests</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Card Type</th>
//             <th>Job Title</th>
//             <th>Annual Income</th>
//             <th>Account Type</th>
//             <th>Account Number</th>
//             <th>Status</th>
//             <th>User Name</th>
//             <th>User Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cardRequests.map(cardRequest => (
//             <tr key={cardRequest.cardid}>
//               <td>{cardRequest.cardtype}</td>
//               <td>{cardRequest.jobTitle}</td>
//               <td>{cardRequest.annualIncome}</td>
//               <td>{cardRequest.accountType}</td>
//               <td>{cardRequest.accountNumber}</td>
//               <td>{cardRequest.cardStatus}</td>
//               <td>{cardRequest.user.name}</td>
//               <td>{cardRequest.user.email}</td>
//               <td>
//                 {cardRequest.cardStatus === 'Pending' && (
//                   <div>
//                     <button onClick={() => handleApprove(cardRequest.cardid)}>Approve</button>
//                     <button onClick={() => handleReject(cardRequest.cardid)}>Reject</button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Managecard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Managecard.css';
import { Link, useNavigate } from 'react-router-dom';
import Generatecard from '../AdminGeneratecard/Generatecard';

const Managecard = () => {
  const [cardRequests, setCardRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/cardreq/all')
      .then(response => {
        setCardRequests(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching card requests:', error);
        setLoading(false); // Ensure loading is false even if there’s an error
      });
  }, []);

  const handleApprove = (id) => {
    axios.get(`http://localhost:8000/cardreq/${id}`)
      .then(response => {
        console.log(response.data);
        const cardreq = response.data
        navigate("/generatecard", {state: {cardreq}})
      })
      .catch(error => {
        console.error('Error approving card request:', error);
      });
  };

  const handleReject = (id) => {
    axios.put(`http://localhost:8000/cardreq/all/${id}`, { cardStatus: 'Rejected' })
      .then(response => {
        const updatedCardRequests = cardRequests.map(cardRequest => {
          if (cardRequest.cardid === id) {
            return { ...cardRequest, cardStatus: 'Rejected' };
          }
          return cardRequest;
        });
        setCardRequests(updatedCardRequests);
      })
      .catch(error => {
        console.error('Error rejecting card request:', error);
      });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="managecard-container">
      <h1>Card Requests</h1>
      <table className="managecard-table">
        <thead>
          <tr>
            <th>Card Type</th>
            <th>Job Title</th>
            <th>Annual Income</th>
            <th>Account Type</th>
            <th>Account Number</th>
            <th>Status</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map(cardRequest => (
            <tr key={cardRequest.cardid}>
              <td>{cardRequest.cardtype}</td>
              <td>{cardRequest.jobTitle}</td>
              <td>{cardRequest.annualIncome}</td>
              <td>{cardRequest.accountType}</td>
              <td>{cardRequest.accountNumber}</td>
              <td>
                <span className={`status ${cardRequest.cardStatus.toLowerCase()}`}>
                  {cardRequest.cardStatus}
                </span>
              </td>
              <td>{cardRequest.user.name}</td>
              <td>{cardRequest.user.email}</td>
              <td className="actions">
                {cardRequest.cardStatus === 'Pending' && (
                  <>
                    <button className="approve-btn" onClick={() => handleApprove(cardRequest.cardid)}>
                    <Link to="/generatecard">Generate card</Link>
                    </button>
                    <button className="reject-btn" onClick={() => handleReject(cardRequest.cardid)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Managecard;

