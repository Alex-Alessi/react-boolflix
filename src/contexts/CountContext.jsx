import { createContext, useState } from "react";
// console.log("CountContext caricato correttamente");
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

    fetch(`${apiUrl}?query=${term}`, fetchConfig)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        selectedGenre,
        setSelectedGenre,
        fetchMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
