import petroleum from "../assets/img/petroleum.png";
import station from "../assets/img/station.png";
import petrol from "../assets/img/petrol.png";
import filling_station from "../assets/img/filling-station.png";

export const Logo = () => {
  return (
    <section className="logo">
      <a href="/" className="logo__a" data-aos="flip-right">
        <img src={petroleum} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a" data-aos="flip-right">
        <img src={filling_station} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a" data-aos="flip-right">
        <img src={petrol} alt="" className="logo__logo-img" />
      </a>
      <a href="/" className="logo__a" data-aos="flip-right">
        <img src={station} alt="" className="logo__logo-img" />
      </a>
    </section>
  );
};
