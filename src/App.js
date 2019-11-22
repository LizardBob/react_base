import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => (
  <div>
    <Pet name="Bob" animal="Doggo" breed="LOL"></Pet>
  </div>
);

render(React.createElement(App), document.getElementById("root"));
