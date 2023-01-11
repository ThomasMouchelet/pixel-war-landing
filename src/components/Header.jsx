import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import gsap from 'gsap';
import { useEffect, useRef } from "react";

const Header = () => {
  const logoRef = useRef(null);

  const handleAnimate = () => {
    gsap.fromTo(logoRef.current, { y: -50}, {y: 10, ease: 'bounce.easeInOut', duration: 0.75})
  };

  useEffect(() => {
    handleAnimate();
  }, [])
  return (
    <header id="header-app">
      <div className="title-container">
        <img className="main-img" src={MainLogo} alt="" ref={logoRef} />
      </div>
      <div className="timer-container">
        <p className="title-timer">La prochaine partie commence dans :</p>
        <Timer />
        <a href="#form">
          <button className="signup-btn">S'inscrire</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
