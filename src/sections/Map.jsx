import GoogleMapReact from "google-map-react";
import petroleum from "../assets/img/petroleum.png";
import station from "../assets/img/station.png";
import petrol from "../assets/img/petrol.png";
import filling_station from "../assets/img/filling-station.png";

export const Map = () => {
  const defaultProps = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxp7tD50n5Zm3NovmleG-HvSo-iVFEyG0" }} // Ваш ключ Google Maps API
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>

      <div className="map__logo">
        <a href="/" className="map__a">
          <img src={petroleum} alt="" className="map__logo-img" />
        </a>
        <a href="/" className="map__a">
          <img src={filling_station} alt="" className="map__logo-img" />
        </a>
        <a href="/" className="map__a">
          <img src={petrol} alt="" className="map__logo-img" />
        </a>
        <a href="/" className="map__a">
          <img src={station} alt="" className="map__logo-img" />
        </a>
      </div>
    </div>
  );
};
