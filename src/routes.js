import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "./NotFound";

// Pages
import {Home} from "./pages/Home"

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};


