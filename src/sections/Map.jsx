import GoogleMapReact from "google-map-react";

export const Map = () => {
  const defaultProps = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12,
  };

  return (
    <div className="map" data-aos="fade-up" data-aos-duration="1000">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxp7tD50n5Zm3NovmleG-HvSo-iVFEyG0" }} // Ваш ключ Google Maps API
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};
