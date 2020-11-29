import React from "react";
import { render } from "react-dom";

import { Container } from "@material-ui/core";
import { Home } from "./pages";

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

render(<App />, mainElement);
