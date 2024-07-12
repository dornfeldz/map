import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://map-backend-8gzqdd29x-lilxolis-projects.vercel.app/")
      .then((res) => {
        res.json();
      })
      .then((data) => setData(data));
  }, []);

  return <div>{data}</div>;
}

export default App;
