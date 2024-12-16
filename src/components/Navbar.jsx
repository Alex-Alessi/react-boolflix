import { NavLink } from "react-router-dom";
import { AppContext } from "../contexts/CountContext";
import { useState } from "react";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    console.log(inputValue);
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
