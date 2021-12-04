import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CreateContextProvider } from "./context/CounterContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CreateContextProvider>
      <App />
    </CreateContextProvider>
  </StrictMode>,
  rootElement
);
