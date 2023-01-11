import airpods from "../assets/airpods-3.png";
import check from "../assets/icons/check.png";

const Reward = () => {
  return (
    <div className="reward">
      <div className="left-content">
        <h2>Gagne tes airpods</h2>
        <div className="description">
          <p>Avec audio spatial personnalisé</p>
          <div className="check">
            <img className="valide" src={check} alt="" />
            <p>La magie, remasterisée.</p>
          </div>
          <div className="check">
            <img className="valide" src={check} alt="" />
            <p>Une autonomie améliorée avec recharge éclair.</p>
          </div>
          <div className="check">
            <img className="valide" src={check} alt="" />
            <p>La résistance à la transpiration et aux éclaboussures.</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <img className="right-img" src={airpods} alt="" />
      </div>
    </div>
  );
};

export default Reward;
