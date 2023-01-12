import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";
import { useState } from "react";

const Header = () => {

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  return (
    <header id="header-app">
      <div className="title-container">
        <img className="main-img" src={MainLogo} alt="" />
      </div>
      <div className="timer-container">
        <p className="title-timer">La prochaine partie commence dans :</p>
        <Timer hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}/>
        <a href="#form">
          {/* <button>S'inscrire</button> */}
          {
            hours < 0 && minutes < 0 && seconds < 0 ? <button>S'inscrire</button> : <button disabled={true}>Bientôt disponible</button>
          }
        </a>
      </div>
    </header>
  );
};

export default Header;
