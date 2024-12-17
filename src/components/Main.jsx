import { useContext } from "react";
import { AppContext } from "../contexts/CountContext";

export default function Main() {
  const { movies } = useContext(AppContext);
  return (
    <main>
      <div className="Container">
        {movies.map((movie) => (
          <div key={movie.id} className="card-miniature">
            <h3>{movie.original_title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
