import { useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
// Pages
import { Home } from "./pages/Home";
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';


export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
