import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map from "./Map";

import Shop from "./Shop";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    // <div>
    //   {data.map((shop) => (
    //     <Shop key={shop.name} shop={shop} />
    //   ))}
    // </div>
    <div>
      <Map shops={data} />
    </div>
  );
}

export default App;
