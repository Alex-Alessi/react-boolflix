import { useContext } from "react";
import { AppContext } from "../contexts/CountContext";

export default function Main() {
  const { movies } = useContext(AppContext);
  return (
    <main>
      <div className="Container">
        {movies.map((movie) => (
          <div key={movie.id} className="card-miniature">
            <image>{movie.poster_path}</image>
          </div>
        ))}
      </div>
    </main>
  );
}
