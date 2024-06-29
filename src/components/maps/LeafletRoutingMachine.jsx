import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
  });
  useEffect(() => {
    function success(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success);
      console.log("lat", lat, "lng", lng);
    }
    var marker1 = L.marker([lat, lng], {
      icon: DefaultIcon,
    }).addTo(map);
    map.on("click", function (e) {
      // L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [L.latLng(lat, lng), L.latLng(-21.43772, 47.09989)],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .addTo(map);
    });
  }, [lat, lng]);
  return null;
};

export default LeafletRoutingMachine;
