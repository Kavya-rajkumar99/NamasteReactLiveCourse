import { useState } from "react";
import { IMG_CDN_LINK } from "../config";
const Title = () => {
    return (
      <img
        src={IMG_CDN_LINK}
        alt="Food Villa"
        className="logo"
      />
    );
  };
  const Header = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
          <div className="auth" onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</div>
        </div>
      </div>
    );
  };
  
  export default Header;