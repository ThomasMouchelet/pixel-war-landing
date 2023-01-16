import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import { useState } from "react";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "./Video/Video";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const logoRef = useRef(null);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleAnimate = () => {
    gsap.from(".title-container", { y: -40 });
    gsap.to(".title-container", {
      y: 20,
      ease: "bounce.easeInOut",
      duration: 1.2,
      scrollTrigger: {
        trigger: "#header-app",
        start: "0px center",
        end: "200px center",
        scrub: 1,
        markers: false,
      },
    });

    gsap.from(".signup-btn", { opacity: 0, y: -10 });
    gsap.to(".signup-btn", {
      opacity: 100,
      y: 20,
      ease: "power4.in",
      duration: 1,
      delay: 1,
    });
  };

  useEffect(() => {
    handleAnimate();
  }, []);
  return (
    <header id="header-app">
      <Video />
      <div className="title-container">
        <img className="main-img" src={MainLogo} alt="" ref={logoRef} />
      </div>
      <div className="timer-container">
        <p className="title-timer">Début de la guerre dans :</p>
        <Timer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        <a
          href={
            hours < 0 && minutes < 0 && seconds < 0
              ? `https://app.pixel-war-esd.fr`
              : "#"
          }
        >
          <button
            // disabled={hours < 0 && minutes < 0 && seconds < 0 ? false : true}
            
          >
            <Link to={{ pathname: "https://app.pixel-war-esd.fr/" }} target="_blank">
              Rejoindre
            </Link>
          </button>
        </a>
        <a
          href="https://www.twitch.tv/pixelwaresd"
          target={"_blank"}
          className="twitch-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.96em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 268"
          >
            <path
              fill="#FFFFFF"
              d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458Zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717V23.263Zm64.008 116.405H128V69.844h-23.275v69.824Zm63.997 0h23.27V69.844h-23.27v69.824Z"
            />
          </svg>
          <span>Live Twitch</span>
        </a>
        <p className="signup-sentence">
          Tu n'as pas encore créé ton compte ? &nbsp;{" "}
          <a href="#form">Inscris-toi</a>
        </p>
      </div>
    </header>
  );
};

export default Header;
