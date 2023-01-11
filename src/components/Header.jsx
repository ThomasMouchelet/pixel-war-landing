import Timer from "./Timer";
import MainLogo from "../assets/Logo_Big_Stroke.png";

const Header = () => {
  return (
    <header id="header-app">
      <div className="title-container">
        <img className="main-img" src={MainLogo} alt="" />
      </div>
      <div className="timer-container">
        <p className="title-timer">La prochaine partie commence dans :</p>
        <Timer />
        <a href="#form">
          <button>S'inscrire</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
