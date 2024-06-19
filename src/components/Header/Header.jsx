import "./Header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Find me a pet</h1>

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
