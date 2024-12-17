import { useContext } from "react";
import { AppContext } from "../contexts/CountContext";

export default function Main() {
  const { movies } = useContext(AppContext);
  const url_img = "https://image.tmdb.org/t/p/w342";
  return (
    <main>
      <div className="Container">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div key={movie.id} className="card-miniature">
                <img src={`${url_img}${movie.poster_path}`} />
              </div>
            )
        )}
      </div>
    </main>
  );
}
