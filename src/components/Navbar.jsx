import { AppContext } from "../contexts/CountContext";
import { useState, useContext } from "react";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const { fetchMovies } = useContext(AppContext);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (!inputValue) {
      alert("Inserisci il nome di un film o serie TV");
      return;
    }

    fetchMovies(inputValue);
  };

  return (
    <nav>
      <div className="Container">
        <div className="navbar">
          <h1>BOOLFLIX</h1>
          <div className="search-bar">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Cerca..."
            />
            <button onClick={handleSearch} className="search-button">
              Cerca
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
