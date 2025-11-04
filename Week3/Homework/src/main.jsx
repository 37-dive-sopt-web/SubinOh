import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/base/reset.css.ts";
import "./styles/base/global.css.ts";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
