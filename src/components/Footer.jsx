import Esd from "../assets/footer/logo-esd.png";
import Esp from "../assets/footer/logo-esp.png";
import Newgo from "../assets/footer/logo-newgo.png";
import Instagram from "../assets/footer/logo-instagram.png";
import Facebook from "../assets/footer/logo-fb.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Esd} alt="" />
        <img src={Esp} alt="" />
        <div className="txt">
          <h2>PIXEL WAR</h2>
          <p>© 2023 - Digital Event</p>
          <p>Team Pixel War</p>
        </div>
      </div>
      <a href="https://newgo.io/" target={"_blank"}>
        <img src={Newgo} alt="" />
      </a>
      <div className="social-media">
        <a href="https://www.instagram.com/esd_ecole" target={"_blank"}>
          <img src={Instagram} alt="" />
        </a>
        <a
          href="https://www.facebook.com/esd.ecole.superieure.du.digital/"
          target={"_blank"}
        >
          <img src={Facebook} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
