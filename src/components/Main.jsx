import { useContext } from "react";
import { AppContext } from "../contexts/CountContext";

export default function Main() {
  const { movies, series, inputValue } = useContext(AppContext);
  const url_img = "https://image.tmdb.org/t/p/w342";
  return (
    <main>
      <div className="Container">
        <div>
          <h2>Film per: {inputValue}</h2>
        </div>
        <div className="image-container">
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <div key={movie.id} className="card-miniature">
                  <img src={`${url_img}${movie.poster_path}`} />
                </div>
              )
          )}
        </div>
        <div>
          <h2>Serie per: {inputValue}</h2>
        </div>
        <div className="image-container">
          {series.map(
            (movie) =>
              series.poster_path && (
                <div key={series.id} className="card-miniature">
                  <img src={`${url_img}${series.poster_path}`} />
                </div>
              )
          )}
        </div>
      </div>
    </main>
  );
}
