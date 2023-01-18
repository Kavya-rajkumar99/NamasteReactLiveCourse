import { useState } from "react";
import { Link } from "react-router-dom";
import { IMG_CDN_LINK } from "../config";
const Title = () => {
  return <img src={IMG_CDN_LINK} alt="Food Villa" className="logo" />;
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <Title />
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="auth" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </div>
    </div>
  );
};

export default Header;
