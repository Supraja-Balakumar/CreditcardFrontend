// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "./Login.css";
// import { Link } from "react-router-dom";
// import Navii from './components/Navii/Navii';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8000/user/login", { email, password })
//       .then((res) => {
//         if (res.data === "Login successful") {
          
//           alert("Login successful!");
//           navigate("/userpage");
//         } else {
//           alert("Invalid email or password");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <Navii />
//     <div
//       id="login"
//       className="d-flex w-100 vh-100 justify-content-center align-items-center "
//     >
//       <div className="w-50 border bg-light p-5">
//         <form onSubmit={handleSubmit}>
//           <h1>LOGIN</h1>
//           <div>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <br />
//           <button className="btn btn-info">Login</button>
//           <p className="mt-3">
//             If you don't have an account, <Link to="/Signupacc">ign up here</Link>.
//           </p>

//         </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Login;



import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Loginacc.css';

function Loginacc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", { email, password })
      .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("userId", res.data.id)
          alert("Login successful!");
          navigate("/userpage");
        }
      ).catch((err) => {
        console.log(err)
        alert("Invalid email or password");
    });
  };

  return (
    <div>
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
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login Form */}
      <div 
        id="login"
        className="d-flex w-100 vh-100 justify-content-center align-items-center " >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />
            <button className="btn btn-info">Login</button>
            <p className="mt-3">
              If you don't have an account, <Link to="/Signupacc">Sign up here</Link>.
            </p>
          </form>
        </div>
      </div>
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
    zIndex: '1000'
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-around'
  },
  navItem: {
    margin: '0 10px'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px'
  }
  
};

export default Loginacc;
