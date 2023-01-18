import airpods3 from "../assets/Airpods.png";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTopUser } from "../services/services/user.service";
gsap.registerPlugin(ScrollTrigger);

const Reward = () => {
  const [lastUsers, setLastUsers] = useState(null);

  useEffect(() => {
    getTopUser(setLastUsers, 5);
  }, []);

  useEffect(() => {
    console.log('last => ', lastUsers);
  }, [lastUsers]);

  const handleAnimation = () => {
    gsap.from(".right-content", { opacity: 0 });
    gsap.to(".right-content", { opacity: 100 });
    gsap.to("#firstInputRef", {
      opacity: 100,
      ease: "power4.in",
      duration: 1.5,
      scrollTrigger: {
        trigger: "#firstInputRef",
        start: "0px center",
        end: "150px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.to("#secondInputRef", {
      opacity: 100,
      ease: "power4.in",
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#secondInputRef",
        start: "0px center",
        end: "150px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.to("#thirdInputRef", {
      opacity: 100,
      ease: "power4.in",
      duration: 1.5,
      delay: 1,
      scrollTrigger: {
        trigger: "#thirdInputRef",
        start: "0px center",
        end: "150px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.from("#airpodRightContainer", { y: 0, x: 20, opacity: 0 });
    gsap.to("#airpodRightContainer", {
      y: -40,
      x: 10,
      opacity: 100,
      ease: "power4.in",
      duration: 1.25,
      scrollTrigger: {
        trigger: "#airpodRightContainer",
        start: "-100px center",
        end: "200px center",
        scrub: 0.5,
        markers: false,
      },
    });
    gsap.from("#airpodLeftContainer", { y: 0, x: 20, opacity: 0 });
    gsap.to("#airpodLeftContainer", {
      y: 40,
      x: -10,
      opacity: 100,
      ease: "power4.in",
      duration: 1.25,
      scrollTrigger: {
        trigger: "#airpodRightContainer",
        start: "-100px center",
        end: "300px center",
        scrub: 0.5,
        markers: false,
      },
    });
  };

  // useEffect(() => {
  //   handleAnimation();
  // }, []);
  return (
    <div className="reward">
      <div className="row ranking-row">
        <div className="left-reward">
          <div className="column rank-column">
            <h2 className="rank-title">Classement</h2>
            <p>
              Défi tes amis et tente de te classer au top du classement. Si tu
              atteints le nombre de 10 coins alors tu es éligible au concours
              pour gagner des <strong>Airpods 3ème génération</strong>. À chaque
              10 coins obtenus, tu as plus de chances de gagner.
            </p>

            <div className="reward-ranking">
              {lastUsers
                ? lastUsers.map((user, index) => (
                  <div className="reward-ranking-item" key={user.uid}>
                    <div className="rank-number">
                      {index + 1}
                      <span>{index > 0 ? "ème" : "er"}</span>
                    </div>
                    <span className="rank-name">{user.username}</span>
                    <span className="rank-pixels">
                      {user.totalScore} Pixels
                    </span>
                  </div>
                ))
                : null
              }
            </div>
          </div>
        </div>

        <div className="right-reward">
          <div className="shadow"></div>
          <img src={airpods3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reward;
