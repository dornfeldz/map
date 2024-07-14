import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapClickHandler = () => {
  useMapEvents({
    click: () => {
      console.log("Hello World");
    },
  });
  return null;
};

function Map({ shops }) {
  return (
    <MapContainer
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
      <MapClickHandler />
    </MapContainer>
  );
}

export default Map;
