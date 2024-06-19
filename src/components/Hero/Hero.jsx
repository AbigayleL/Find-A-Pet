import { Link } from "react-router-dom";
import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";

import "./Hero.scss";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-cats-dogs">
          <Link to="/cats">
            <div className="cat">
              <h2>Choose from cats:</h2>
              <img src={cat} alt="cat" />
            </div>
          </Link>
          <Link to="/dogs">
            <div className="dog">
              <h2>Choose from dogs:</h2>

              <img src={dog} alt="dog" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
