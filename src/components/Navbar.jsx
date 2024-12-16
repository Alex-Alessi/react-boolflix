import { NavLink } from "react-router-dom";
import { AppContext } from "../contexts/CountContext";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <h1>BOOLFLIX</h1>
          <div className="search-bar">
            <input type="text" placeholder="Cerca..." />
            <button className="search-button">Cerca</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
