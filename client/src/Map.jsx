import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./leafletIconSetup";
import axios from "axios";

const MapClickHandler = () => {
  useMapEvents({
    click: (e) => {
      console.log(e.latlng);
    },
  });
  return null;
};

function Map({ shops }) {
  const handleUpdateShop = (shop) => {
    console.log(
      `Updating ${shop.name} at lat: ${shop.coordinates.latitude}, lng:${shop.coordinates.longitude}...`
    );
  };
  const handleDeleteShop = (shop) => {
    console.log(
      `Deleting ${shop.name} at lat: ${shop.coordinates.latitude}, lng:${shop.coordinates.longitude}...`
    );
    axios.delete("http://localhost:8000/shops");
  };

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
          key={shop.id}
          position={[shop.coordinates.latitude, shop.coordinates.longitude]}
        >
          <Popup>
            <h1 className="font-bold">{shop.name}</h1>
            <p>{shop.description}</p>
            <p>Owned by {shop.owner}</p>
            <div className="flex underline gap-2 underline-offset-1">
              <button onClick={() => handleUpdateShop(shop)}>Update</button>
              <button onClick={() => handleDeleteShop(shop)}>Delete</button>
            </div>
          </Popup>
        </Marker>
      ))}
      <MapClickHandler />
    </MapContainer>
  );
}

export default Map;
