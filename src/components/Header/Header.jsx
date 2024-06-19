import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="home">Home</li>
          <li>About</li>
          <li className="sign-in">Sign in</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
