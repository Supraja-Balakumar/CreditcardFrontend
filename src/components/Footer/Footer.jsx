// import React from 'react'
// import './Footer.css'

// function Footer() {
//   return (
//     <footer className="footer">
//             <div className="footer-content">
//                 <p>&copy; 2024 Baby bank. All rights reserved.</p>
//                 <h5>*Terms and conditions of Baby bank apply.</h5>


//                 <h6>Corporate Office address  :
//                     <br />
//                          <p>Baby Bank Towers,Marc Cardinal Ouellet, Prefect
// Palazzo della Congregazioni,
// Piazza Pio XII, 10
// Roma, Italia
// 00193
// Phone: 06.69.88.42.17</p>
//                 </h6>
//                 <h4></h4>
//                 {/* <ul className="footer-links">
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#rooms">Foods</a></li>
//                     <li><a href="#dining">Dining</a></li>
//                     <li><a href="#amenities">Amenities</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul> */}
//                 <div className="social-media">
//                     <a href="www.facebook.com">Facebook</a> |
//                     <a href="www.instagram.com">Instagram</a> |
//                     <a href="www.twitter.com">Twitter</a>
//                 </div>
//             </div>
//         </footer>
//   )
// }

// export default Footer


import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2024 Baby Bank. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
