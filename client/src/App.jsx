import { useEffect, useState } from "react";
import Map from "./Map";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://map-backend-tau.vercel.app/shops")
      // fetch("http://localhost:8000/shops")
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
