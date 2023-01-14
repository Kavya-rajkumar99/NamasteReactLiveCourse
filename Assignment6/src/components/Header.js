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
        </div>
      </div>
    );
  };
  
  export default Header;