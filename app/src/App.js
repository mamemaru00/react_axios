import React, { useState, useEffect } from "react";
import axios from "./components/axios";
import requests from "./Requests";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchTrending);
      setMovie(response.data.results);
      return response;
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      {movie.map((mov, index) => (
        <div key={index}>
          {mov.title} // この部分は実際のデータ構造に応じて適切に修正する必要があります
        </div>
      ))}
    </div>
  );
}

export default App;