import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>React + FastAPI</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {message ? <p>Backend says: {message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
