import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "./leafletIconSetup";
import { useLoaderData } from "react-router-dom";

function Map() {
  const shops = useLoaderData();

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

    // setDislayForm(!displayForm);
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
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer
        center={[47.5027, 19.0491]}
        zoom={14}
        style={{
          height: "84vh",
          width: "100%",
        }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />
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
    </div>
  );
}

export default Map;
