import { useEffect, useState } from "react";
import Map from "./Map";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://map-backend-tau.vercel.app/shops")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <Map shops={data} />;
}

export default App;
