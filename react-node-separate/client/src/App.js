import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  console.log(process.env.REACT_APP_API_BASE_URL);

  useEffect(() => {
    setError("");
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/data`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError("There was an error fetching data!");
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from server: {error || JSON.stringify(data)}</p>
      </header>
    </div>
  );
}

export default App;
