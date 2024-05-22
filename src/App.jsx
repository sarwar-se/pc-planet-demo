import "./css/pattern.css";
import "./css/layout.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
