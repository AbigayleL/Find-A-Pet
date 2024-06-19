import cat from "../../assets/cat.png";
import dog from "../../assets/dog.png";

import "./Hero.scss";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-cats-dogs">
          <div className="cat">
            <img src={cat} alt="cat" />
          </div>
          <div className="dog">
            <img src={dog} alt="dog" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
