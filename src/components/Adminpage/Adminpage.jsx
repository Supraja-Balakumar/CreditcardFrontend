

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Adminpage.css'

// const Adminpage = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Admin Dashboard</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item active">
//                 <Link to="/productpage" className="nav-link">Products</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Managecard" className="nav-link">Manage Cards</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container">
//         <h1>Admin Dashboard</h1>
//         <p>Welcome to the admin dashboard!</p>
//       </div>
//     </div>
//   );
// };

// export default Adminpage;



import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
// Import your CSS file for styling
import './Adminpage.css'; // Import your CSS file for styling

ChartJS.register(
  Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement
);

const AdminDashboard = () => {
  // Sample data for charts
  const cardStatusData = {
    labels: ['Approved', 'Pending', 'Rejected'],
    datasets: [{
      label: 'Card Statuses',
      data: [120, 30, 10], // Sample data
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1
    }]
  };

  const monthlyCardData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Cards Issued',
      data: [15, 20, 25, 30, 28, 35, 40, 50, 45, 60, 55, 70], // Sample data
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const handleLogout = () =>{
    sessionStorage.clear();
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Admin Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/productpage" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/Managecard" className="nav-link">Manage Cards</Link>
              </li>

              <li className="nav-item " style={{marginLeft:900}}> 
            <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
          </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        {/* <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header> */}
        <div className="dashboard-content">
          <div className="dashboard-statistics">
            <div className="stat-card">
              <h3>Total Cards Issued</h3>
              <p>150</p>
            </div>
            <div className="stat-card">
              <h3>Approved Cards</h3>
              <p>120</p>
            </div>
            <div className="stat-card">
              <h3>Pending Cards</h3>
              <p>30</p>
            </div>
            <div className="stat-card">
              <h3>Rejected Cards</h3>
              <p>10</p>
            </div>
          </div>
          <div className="dashboard-charts">
            <div className="chart-container" style={{height:500}}>
              <h2>Card Status Distribution</h2>
              <Pie data={cardStatusData} />
            </div>
            <div className="chart-container" style={{height:500}}>
              <h2>Monthly Card Issuances</h2>
              <Bar data={monthlyCardData} />
            </div>
          </div>
          <div className="dashboard-recent-activities">
            <h2>Recent Activities</h2>
            <ul>
              <li>Card #1234 issued to John Doe on 2024-08-20</li>
              <li>Card #1235 approved for Jane Smith on 2024-08-18</li>
              <li>Card #1236 rejected due to insufficient details on 2024-08-15</li>
              <li>Card #1237 issued to Alice Johnson on 2024-08-10</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
