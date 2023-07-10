import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
