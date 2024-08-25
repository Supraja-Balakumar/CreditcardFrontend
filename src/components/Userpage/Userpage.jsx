
// import React from 'react';
// import './Userpage.css';  
// import { Link } from 'react-router-dom';

// function Userpage() {
//   return (
//     <div className="container userpagecontainer">
//       <header className="headercard">
//         <h1>CREDIT CARDS</h1>
//       </header>
      
//       <section className="subtitle">
//         <h2>Apply Cards Online</h2>
//       </section>
      
//       <section className="cards">
//         <div className="card">
//           <img src="https://media.istockphoto.com/id/92287499/photo/worn-gold-credit-card.jpg?s=612x612&w=0&k=20&c=wN0Grp3I8Ys8zx0kwmcGyc7244Hz5FT1Ahwef_r4Sy4=" alt="Card Image 1" />
//           <div className="card-content">
//             <h3>Gold Card</h3>
//             <p>Get premium benefits with our Gold Card.</p>
//             <Link to="/CardApply">Apply Now</Link>
//           </div>
//         </div>
//         <div className="card">
//           <img src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/platinum-mastercard-card_1280x720.png" alt="Card Image 2" />
//           <div className="card-content">
//             <h3>Platinum Card</h3>
//             <p>Enjoy exclusive offers with the Platinum Card.</p>
//             <Link to="/CardApply">Apply Now</Link>
//           </div>
//         </div>
//         <div className="card">
//           <img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149125291.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid" alt="Card Image 3" />
//           <div className="card-content">
//             <h3>Silver Card</h3>
//             <p>Affordable and reliable Silver Card for everyday use.</p>
//             <Link to="/CardApply">Apply Now</Link>
//           </div>
//         </div>
//         <div className="card">
//           <img src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2017/11/black-card.jpg" alt="Card Image 4" />
//           <div className="card-content">
//             <h3>Black Card</h3>
//             <p>Elite privileges with the exclusive Black Card.</p>
//             <Link to="/CardApply">Apply Now</Link>
//           </div>
//         </div>
//       </section>
      
//       <footer className="footer">
//         <p>&copy; 2024 Credit Card Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Userpage;

import React from 'react';
import { Link } from 'react-router-dom';
import './Userpage.css';

function Userpage() {

  const handleLogout = () =>{
    sessionStorage.clear();
  }

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

      {/* Content */}
      <header className="headercard">
        <h1 style={{color:'white'}}>CREDIT CARDS</h1>
      </header>
      
      <section className="subtitle">
        <h2 style={{color:'white'}}>Apply Cards Online</h2>
      </section>
      
      <section className="cards">
        <div className="card">
          <img src="https://media.istockphoto.com/id/92287499/photo/worn-gold-credit-card.jpg?s=612x612&w=0&k=20&c=wN0Grp3I8Ys8zx0kwmcGyc7244Hz5FT1Ahwef_r4Sy4=" alt="Card Image 1" />
          <div className="card-content">
            <h3>Gold Card</h3>
            <p>Get premium benefits with our Gold Card.</p>
            <Link to="/CardApply">Apply Now</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/platinum-mastercard-card_1280x720.png" alt="Card Image 2" />
          <div className="card-content">
            <h3>Platinum Card</h3>
            <p>Enjoy exclusive offers with the Platinum Card.</p>
            <Link to="/CardApply">Apply Now</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149125291.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid" alt="Card Image 3" />
          <div className="card-content">
            <h3>Silver Card</h3>
            <p>Affordable and reliable Silver Card for everyday use.</p>
            <Link to="/CardApply">Apply Now</Link>
          </div>
        </div>
        <div className="card">
          <img src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2017/11/black-card.jpg" alt="Card Image 4" />
          <div className="card-content">
            <h3>Black Card</h3>
            <p>Elite privileges with the exclusive Black Card.</p>
            <Link to="/CardApply">Apply Now</Link>
          </div>
        </div>
      </section>
      
       {/* View Credit Card Button */}
       <section className="view-credit-card">
        <button style={{backgroundColor:'white',marginLeft: 700, marginTop:50, textDecoration: null}}><Link to="/Viewcardstatus" className="view-button">View Your Card Status</Link></button>
      </section>
      
      <footer className="footer-user">
        <p>&copy; 2024 Credit Card Company. All rights reserved.</p>
      </footer>
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

export default Userpage;
