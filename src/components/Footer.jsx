import Esd from "../assets/footer/logo-esd.png";
import Esp from "../assets/footer/logo-esp.png";
import Newgo from "../assets/footer/logo-newgo.png";
import Instagram from "../assets/footer/logo-instagram.png";
import Reddit from "../assets/footer/logo-reddit.png";
import Twitch from "../assets/footer/logo-twitch.png";
import Tiktok from "../assets/footer/logo-tiktok.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="mobile-social-media">
        <div className="txt">
          <h2>PIXEL WAR</h2>
          <p>
            © {year} - Digital Event - <span>Team Pixel War</span>
          </p>
        </div>
        <div className="logo">
          <a href="https://ecole-du-digital.com/" target={"_blank"} rel="noreferrer">
            <img src={Esd} alt="" />
          </a>
          <a href="https://espub.org/" target={"_blank"} rel="noreferrer">
            <img src={Esp} alt="" />
          </a>
          <a href="https://newgo.io/" target={"_blank"} rel="noreferrer">
            <img src={Newgo} alt="" />
          </a>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/esd_ecole" target={"_blank"} rel="noreferrer">
          <img src={Instagram} alt="" />
        </a>
        <a
          href="https://www.reddit.com/r/PixelWarEsd/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={Reddit} alt="" />
        </a>
        <a
          href="https://www.twitch.tv/pixelwaresd"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={Twitch} alt="" />
        </a>
        <a
          href="https://www.tiktok.com/@ecole_du_digital?_t=8Yxm6w8NTQz&_r=1"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={Tiktok} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
