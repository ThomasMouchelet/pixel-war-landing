import swords from "../assets/icons/swords.png";
import avatar from "../assets/icons/icon_avatar.png";
import coin from "../assets/icons/coin.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const firstCard = useRef(null);
  const secondCard = useRef(null);
  const thirdCard = useRef(null);

  const handleAnimation = () => {
    gsap.from("#firstCard", { opacity: 0, y: 75 });
    gsap.to("#firstCard", {
      opacity: 100,
      y: 0,
      ease: "power4.in",
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: ".content",
        start: "-100px center",
        end: "200px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.from("#secondCard", { opacity: 0, y: 75 });
    gsap.to("#secondCard", {
      opacity: 100,
      y: 0,
      ease: "power4.in",
      duration: 1,
      delay: 4,
      scrollTrigger: {
        trigger: ".content",
        start: "-100px center",
        end: "200px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.from("#thirdCard", { opacity: 0, y: 75 });
    gsap.to("#thirdCard", {
      opacity: 100,
      y: 0,
      ease: "power4.in",
      duration: 1,
      delay: 8,
      scrollTrigger: {
        trigger: ".content",
        start: "-100px center",
        end: "200px center",
        scrub: 0.5,
        markers: false,
      },
    });
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div className="content">
      <h2 id="conceptTitle">Le concept</h2>
      <div className="cards">
        <div className="card" ref={firstCard} id="firstCard">
          <div className="center">
            <div className="row">
              <img className="image-size " src={swords} alt="" />
              <h3>Jouer</h3>
            </div>
            <p>
              Objectif de cette « Pixel War » : dessiner des œuvres bien
              identifiables et faire en sorte qu'elles ne soient pas effacées.
              Tu peux également saccager les oeuvres des autres !
            </p>
          </div>
        </div>
        <div className="card" ref={secondCard} id="secondCard">
          <div className="center">
            <div className="row">
              <img className="image-size " src={avatar} alt="" />
              <h3>Créer</h3>
            </div>
            <p>
              Fais place à ton imagination en plaçant des pixels colorés sur la
              fresque afin de créer une illustration. Mais attention, entre deux
              poses de pixel, il va te falloir patienter une minute !
            </p>
          </div>
        </div>
        <div className="card" ref={thirdCard} id="thirdCard">
          <div className="center">
            <div className="row">
              <img className="image-size " src={coin} alt="" />
              <h3>Gagner du terrain</h3>
            </div>
            <p>
              Pour être éligible au tirage au sort et tenter de gagner le lot
              gagnant, il te faudra gagner au moins 10 coins au cours de la
              semaine de jeu !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
