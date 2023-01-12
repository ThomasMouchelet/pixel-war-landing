import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);

  const handleAnimate = () => {
    gsap.to(logoRef.current, {y: 10, ease: 'bounce.easeInOut', duration: 0.75, scrollTrigger: {
      trigger: '#header-app',
      start: '0px center',
      end: '200px center',
      scrub:1,
      markers: true,
    }})
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
