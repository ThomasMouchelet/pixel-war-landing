import airpodLeft from "../assets/airpod-left.png";
import airpodRight from "../assets/airpod-right.png";
import check from "../assets/icons/check.png";
import gsap from 'gsap';
import { useEffect } from "react";
import { useRef } from "react";

const Reward = () => {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const airpodRightContainer = useRef(null);
  const airpodLeftContainer = useRef(null);

  const handleAnimation = () => {
    gsap.fromTo(firstInputRef.current,{opacity: 0}, {opacity: 100, ease: "power4.in", duration: 1.5});
    gsap.fromTo(secondInputRef.current,{opacity: 0}, {opacity: 100, ease: "power4.in", duration: 1.5, delay: 0.5});
    gsap.fromTo(thirdInputRef.current,{opacity: 0}, {opacity: 100, ease: "power4.in", duration: 1.5, delay: 1});
    gsap.fromTo(airpodRightContainer.current, {y:-80, x:-10, opacity:0}, {y:-40, x:10, opacity:100, ease: "power4.in", duration: 1.25});
    gsap.fromTo(airpodLeftContainer.current, {y:80, x:10, opacity:0}, {y:40, x:-10, opacity:100, ease: "power4.in", duration: 1.25});
  };



  
  useEffect(() => {
    handleAnimation();
  }, []);
  return (
    <div className="reward">
      <div className="left-content">
        <h2>Gagne tes airpods</h2>
        <div className="description">
          <p>Avec audio spatial personnalisé</p>
          <div className="check" ref={firstInputRef}>
            <img className="valide" src={check} alt="" />
            <p>La magie, remasterisée.</p>
          </div>
          <div className="check" ref={secondInputRef}>
            <img className="valide" src={check} alt="" />
            <p>Une autonomie améliorée avec recharge éclair.</p>
          </div>
          <div className="check" ref={thirdInputRef}>
            <img className="valide" src={check} alt="" />
            <p>La résistance à la transpiration et aux éclaboussures.</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="airpod-left-container" ref={airpodRightContainer}><img src={airpodLeft} alt="" className="airpod" /></div>
        <div className="airpod-right-container" ref={airpodLeftContainer}><img src={airpodRight} alt="" className="airpod" /></div>
      </div>
    </div>
  );
};

export default Reward;
