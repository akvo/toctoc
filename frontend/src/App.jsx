import React, { useState } from "react";
import constructionLogoRef from "./construction.svg";
import ExessBrand from "./ExcessBrand";
import "./App.scss";

function ClickCount() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>So far {count} votes to make this happen!</p>
      <button onClick={() => setCount(count + 1)}>Vote!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ExessBrand />
      <img
        src={constructionLogoRef}
        className="App-constructionlogo"
        alt="Under construction"
      />
      <ClickCount />
    </div>
  );
}

export default App;
