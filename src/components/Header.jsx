import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import { useState } from "react";

import gsap from 'gsap';
import { useEffect, useRef } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Video from "./Video/Video";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

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
      <Video />
      <div className="title-container">
        <img className="main-img" src={MainLogo} alt="" ref={logoRef} />
      </div>
      <div className="timer-container">
        <p className="title-timer">Début de la guerre dans :</p>
        <Timer hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}/>
          
        <a href="#form"><button>S'inscrire</button></a>
          
        <a href={hours < 0 && minutes < 0 && seconds < 0 ? `https://app.pixel-war-esd.fr` : "#"}>
          <button disabled={hours < 0 && minutes < 0 && seconds < 0 ? false : true}>
            Rejoindre
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
