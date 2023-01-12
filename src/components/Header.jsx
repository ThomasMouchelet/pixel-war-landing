import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);

  const handleAnimate = () => {
    gsap.from(".title-container", {y:-40})
    gsap.to(".title-container", {y: 20, ease: 'bounce.easeInOut', duration: 1.2, scrollTrigger: {
      trigger: '#header-app',
      start: '0px center',
      end: '200px center',
      scrub:1,
      markers: false,
    }})

    gsap.from('.signup-btn', {opacity:0, y:-10})
    gsap.to('.signup-btn', {opacity: 100, y:20, ease:'power4.in', duration:1, delay:1})
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
