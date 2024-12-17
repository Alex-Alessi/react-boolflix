import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const apiUrl = "https://api.themoviedb.org/3/search/movie";
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGVjYmI3NWM3OTVkMTU2Mjg3YjczNjYwOWUzMThkNCIsIm5iZiI6MTczNDM0Mjg2Ny4zNDcwMDAxLCJzdWIiOiI2NzVmZjhkM2RlOGYzNGUwYjI1OGFhNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YWUKTYHFwwJQ5mUUUh0yf-5Nhw6hWmFarFPSV_Z9yZI",
  };

  const fetchMovies = (term) => {
    const fetchConfig = {
      method: "GET",
      headers,
    };

    fetch(`${apiUrl}/search/movie?query=${term}`, fetchConfig)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const [globalData, setGlobalData] = useState({
    movies,
    setMovies,
    series,
    setSeries,
    selectedGenre,
    setSelectedGenre,
    fetchMovies,
  });

  return (
    <AppContext.Provider value={globalData}>{children}</AppContext.Provider>
  );
};
