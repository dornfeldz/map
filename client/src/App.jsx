import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => setData(data));
  }, []);

  return <div>{data}</div>;
}

export default App;
