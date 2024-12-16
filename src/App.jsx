import React from "react";

// contexts
import { AppProvider } from "./contexts/CountContext";

// components
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Main />
    </AppProvider>
  );
}

export default App;
