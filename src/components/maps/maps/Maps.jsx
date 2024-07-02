import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer
} from "react-leaflet";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function Maps() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const mapRef = useRef();



  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLat(latitude);
    setLng(longitude);
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], 15);
    }
  }, [lat, lng])


  return (
    <div className="App absolute w-full h-screen">
      <MapContainer ref={mapRef} center={[lat, lng]} zoom={13} style={{
        zIndex: 0,
        width: "100%",
      }} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletRoutingMachine lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Maps;
