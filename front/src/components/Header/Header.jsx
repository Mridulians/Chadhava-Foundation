// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Header.css";
// import Logo from '../../assets/new_logo.png'

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation(); // Get current route

//   // State to manage user session
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Fetch user from sessionStorage
//   useEffect(() => {
//     const storedUser = JSON.parse(sessionStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   // Handle Logout
//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     setUser(null);
//     navigate("/donor-login"); // Redirect to login page after logout
//   };

//   return (
//     <div className="header">
//       {/* Left Side - Logo */}
//       <div className="logo">
//         <img src={Logo} alt="" className="logo_img" onClick={()=>navigate("/")}/>
//       </div>

//       {/* Right Side - Navigation Menu */}
//       <div className="nav-menu">
//         {/* <Link
//           to="/"
//           className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
//         >
//           Home
//         </Link> */}
//         <Link
//           to="/about"
//           className={`nav-item ${
//             location.pathname === "/about" ? "active" : ""
//           }`}
//         >
//           About
//         </Link>
//         <Link
//           to="/stories"
//           className={`nav-item ${
//             location.pathname === "/stories" ? "active" : ""
//           }`}
//         >
//           Stories
//         </Link>
//         <Link
//           to="/involved"
//           className={`nav-item ${
//             location.pathname === "/involved" ? "active" : ""
//           }`}
//         >
//           Get Involved
//         </Link>
//         <Link
//           to="/contact-us"
//           className={`nav-item ${
//             location.pathname === "/contact-us" ? "active" : ""
//           }`}
//         >
//           Contact
//         </Link>

//         {/* If user is logged in, show dropdown; otherwise, show Login/Signup */}
//         {user ? (
//           <div className="user-dropdown">
//             <button
//               className="user-btn"
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//             >
//               {user.email} ▼
//             </button>

//             {/* Dropdown Menu */}
//             {dropdownOpen && (
//               <div className="dropdown-menu">
//                 <button onClick={handleLogout} className="dropdown-item">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             to="/donor-login"
//             className={`nav-item ${
//               location.pathname === "/donor-login" ? "active" : ""
//             }`}
//           >
//             Login/Signup
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/new_logo.png";
import { FaBars, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    navigate("/donor-login");
    setSidebarOpen(false); // Close sidebar after logout
  };

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src={Logo}
          alt=""
          className="logo_img"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation */}
      <div className="nav-menu">
        <Link
          to="/about"
          className={`nav-item ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/stories"
          className={`nav-item ${
            location.pathname === "/stories" ? "active" : ""
          }`}
        >
          Stories
        </Link>
        <Link
          to="/involved"
          className={`nav-item ${
            location.pathname === "/involved" ? "active" : ""
          }`}
        >
          Get Involved
        </Link>
        <Link
          to="/contact-us"
          className={`nav-item ${
            location.pathname === "/contact-us" ? "active" : ""
          }`}
        >
          Contact
        </Link>

        {/* User Dropdown */}
        {user ? (
          <div className="user-dropdown">
            <button
              className="user-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.email} ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/donor-login"
            className={`nav-item ${
              location.pathname === "/donor-login" ? "active" : ""
            }`}
          >
            Login/Signup
          </Link>
        )}
      </div>

      {/* Hamburger Menu (Visible on Mobile) */}
      <div className="hamburger" onClick={() => setSidebarOpen(true)}>
        <FaBars />
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`mobile-menu ${sidebarOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </div>

        <Link
          to="/about"
          className="mobile-nav-item"
          onClick={() => setSidebarOpen(false)}
        >
          About
        </Link>
        <Link
          to="/stories"
          className="mobile-nav-item"
          onClick={() => setSidebarOpen(false)}
        >
          Stories
        </Link>
        <Link
          to="/involved"
          className="mobile-nav-item"
          onClick={() => setSidebarOpen(false)}
        >
          Get Involved
        </Link>
        <Link
          to="/contact-us"
          className="mobile-nav-item"
          onClick={() => setSidebarOpen(false)}
        >
          Contact
        </Link>

        <div className="contact-info-new-mobile-hamburger">
          <span>
            <FaEnvelope /> info@chadhavafoundation.com
          </span>
          <span>
            <FaPhone /> +91-7428393469
          </span>
          <span>
            <FaPhone /> +91-7982183517
          </span>
        </div>

        {/* User Dropdown in Sidebar */}
        {user ? (
          <div className="user_email_and_logout_for_mobile">
            <button className="user_email_and_logout_for_mobile_user_email">
              {user.email}
            </button>

            <button
              onClick={handleLogout}
              className="user_email_and_logout_for_mobile_user_logout"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/donor-login"
            className="mobile-nav-item"
            onClick={() => setSidebarOpen(false)}
          >
            Login/Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
