import star from "../assets/icons/Star.png";
import smiley from "../assets/icons/smiley.png";
import ghost from "../assets/icons/ghost.png";
import { useRef, useEffect } from "react";
import gsap from 'gsap';

const Features = () => {
  const firstCard = useRef(null);
  const secondCard = useRef(null);
  const thirdCard = useRef(null);

  const handleAnimation = () => {
    gsap.fromTo(firstCard.current, {opacity: 0}, {opacity: 100, ease:"power4.in", duration:2});
    gsap.fromTo(secondCard.current, {opacity: 0}, {opacity: 100, ease:"power4.in", duration:2, delay: 0.5});
    gsap.fromTo(thirdCard.current, {opacity: 0}, {opacity: 100, ease:"power4.in", duration:2, delay:1});
  }

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <div className="content">
      <h2>Le concept</h2>
      <div className="cards">
        <div className="card" ref={firstCard}>
          <img className="image-size " src={star} alt="" />
          <div className="center">
            <h3>Jouer</h3>
            <p>
              Place le plus de pixels tout au long de la partie pour tenter
              de remporter la récompense ! Une seule règle : un pixel est
              personnel, vous pouvez placer un pixel toutes les minutes maximum
            </p>
          </div>
        </div>
        <div className="card" ref={secondCard}>
          <img className="image-size " src={smiley} alt="" />
          <div className="center">
            <h3>Créer</h3>
            <p>
              Fais place à ton imagination en plaçant des pixels colorés sur la
              fresque afin de créer une illustration. Mais attention, entre deux
              poses de pixel, il va te falloir patienter une minute !
            </p>
          </div>
        </div>
        <div className="card" ref={thirdCard}>
          <img className="image-size " src={ghost} alt="" />
          <div className="center">
            <h3>Gagner du terrain</h3>
            <p>
              Pour être éligible au tirage au sort et tenter de gagner le lot
              gagnant, il te faudra gagner au moins 10 coins au cours de la semaine
              de jeu !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
