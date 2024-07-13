// MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default icon not displaying correctly in React-Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

function Map({ shops }) {
  useEffect(() => {
    // Optional: console log for debugging purposes
    console.log("Map component mounted");
  }, []);

  const newPopup = (e) => {
    console.log(e);
  };

  return (
    <MapContainer
      onClick={newPopup}
      center={[47.5027, 19.0491]}
      zoom={14}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.meetingareapoint.com/">Meeting Area Point</a>'
      />
      {shops.map((shop) => (
        <Marker
          key={shop.name}
          position={[shop.coordinates.latitude, shop.coordinates.longitude]}
        >
          <Popup>
            <h1 className="font-bold">{shop.name}</h1>
            <p>{shop.description}</p>
            <p>Owned by {shop.owner}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
