import { RouterProvider } from "react-router";
import { router } from "./router/router";
import "./styles/base/reset.css.ts";
import "./styles/base/global.css.ts";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
