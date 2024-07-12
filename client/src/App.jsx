import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://map-backend-git-main-lilxolis-projects.vercel.app/")
      .then((res) => {
        res.json();
      })
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return <div>{data}</div>;
}

export default App;
