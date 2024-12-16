import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <AppContext.Provider
      val={{
        movies,
        series,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
