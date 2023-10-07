import petroleum from "../assets/img/petroleum.png";
import station from "../assets/img/station.png";
import petrol from "../assets/img/petrol.png";
import filling_station from "../assets/img/filling-station.png";

export const Logo = () => {
  return (
    <div className="logo">
      <a href="/" className="logo__a">
        <img src={petroleum} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a">
        <img src={filling_station} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a">
        <img src={petrol} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a">
        <img src={station} alt="" className="logo__logo-img" />
      </a>
    </div>
  );
};
