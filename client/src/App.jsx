import { useEffect, useState } from "react";
import Map from "./Map";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://map-backend-tau.vercel.app/shops")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    // <div className="flex">
    //   <div className="w-[50%] h-full">
    <Map shops={data} />
    //   </div>
    //   <div className="p-10 flex flex-col">
    //     <button className="">Button</button>
    //     <button className="">Button</button>
    //     <button className="">Button</button>
    //     <button className="">Button</button>
    //     <button className="">Button</button>
    //   </div>
    // </div>
  );
}

export default App;
