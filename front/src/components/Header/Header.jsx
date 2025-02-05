import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file

const Header = () => {
  return (
    <div className="header">
      {/* Left Side - Logo */}
      <div className="logo">
        Chadhava Foundation
      </div>

      {/* Right Side - Navigation Menu */}
      <div className="nav-menu">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/stories" className="nav-item">Stories</Link>
        <Link to="/involved" className="nav-item">Get Involved</Link>
      </div>
    </div>
  );
};

export default Header;
