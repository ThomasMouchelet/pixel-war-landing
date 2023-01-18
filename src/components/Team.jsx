import { useEffect, useState } from "react";
import podium from "../assets/podium.png";
import { getTopUser } from "../services/services/user.service";
import screen1 from "../assets/screen1.jpg";
import screen2 from "../assets/screen2.jpg";
import screen3 from "../assets/screen3.jpg";
import screen4 from "../assets/screen4.jpg";

const Team = () => {
  const [lastUsers, setLastUsers] = useState([]);

  useEffect(() => {
    getTopUser(setLastUsers, 3);
    if (lastUsers) {
      console.log(lastUsers);
    }
  }, []);

  return (
    <>
      {lastUsers ? (
        <div className="team-container">
          <h2 className="rank-title">Les équipes</h2>
          <div className="creations-container">
            <h4>Vos créations</h4>
            <div className="slider">
              <img src={screen1} alt="" className="imgScreen" />
              <img src={screen2} alt="" className="imgScreen" />
              <img src={screen3} alt="" className="imgScreen" />
              <img src={screen4} alt="" className="imgScreen" />
            </div>
          </div>
          <div className="podium-container">
            <div className="podium-left">
              <div className="podium-user">
                {lastUsers.map((user, index) => (
                  <p key={index} className="userNumber">
                    {user.username}
                  </p>
                ))}
              </div>
              <img src={podium} alt="" />
              <div className="podium-shadow"></div>
            </div>
            <div className="podium-right">
              <div className="podium-text">
                <p>
                  Si vous atteignez le nombre de 10 coins alors vous êtes
                  éligibles au tirage au sort pour gagner des Airpods troisième
                  génération.{" "}
                </p>
                <br /> <br />{" "}
                <p>
                  À chaque 10 coins obtenus, votre chance d’être tiré au sort
                  est multiplié.
                </p>
                <br /> <br />{" "}
                <p>
                  Les trois personnes qui auront posés le plus de pixels
                  gagneront des goodies !
                </p>{" "}
                <br /> <br />{" "}
                <p>
                  La collecte de points se fait sur toute la semaine ! Mais
                  jeudi soir, le nombre de points seront doublés.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Team;
