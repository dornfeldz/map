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
import Form from "./Form";
import { useState } from "react";

function Map({ shops }) {
  const [displayForm, setDislayForm] = useState(false);

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        handleNewShop(e);
      },
    });
    return null;
  };

  const handleNewShop = (e) => {
    console.log(e.latlng);

    setDislayForm(!displayForm);
  };

  const handleUpdateShop = (shop) => {
    console.log(
      `Updating ${shop.name} at lat: ${shop.coordinates.latitude}, lng:${shop.coordinates.longitude}...`
    );
  };
  const handleDeleteShop = (shop) => {
    console.log(
      `Deleting ${shop.name} at lat: ${shop.coordinates.latitude}, lng:${shop.coordinates.longitude}...`
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <MapContainer
        center={[47.5027, 19.0491]}
        zoom={14}
        style={{
          height: "100vh",
          width: "100%",
        }}
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
              <div className="flex underline gap-2 underline-offset-1">
                <button onClick={() => handleUpdateShop(shop)}>Update</button>
                <button onClick={() => handleDeleteShop(shop)}>Delete</button>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapClickHandler />
      </MapContainer>
      <div className={displayForm ? "block" : "hidden"}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            zIndex: "1000",
          }}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Map;
