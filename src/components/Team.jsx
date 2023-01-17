import { useEffect, useState } from "react";
import podium from "../assets/podium.png";
import { getTopThreeUser } from "../services/services/user.service";

const Team = () => {
  const [lastUsers, setLastUsers] = useState([]);

  useEffect(() => {
    getTopThreeUser(setLastUsers);
    // getLastUsers();
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
          </div>
          <div className="podium-container">
            <div className="podium-left">
              <div className="podium-user">
                {lastUsers.map((user, index) => <p key={index} className="userNumber">{user.username}</p>)}
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
