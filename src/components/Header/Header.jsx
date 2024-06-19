import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="logo">Find me a pet</h1>
      </Link>

      <nav className="nav">
        <ul className="nav-list">
          <Link to="/">
            <li className="home">Home</li>
          </Link>
          <li>About</li>
          <li className="sign-in">Sign in</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
