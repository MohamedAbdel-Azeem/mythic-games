import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamesList from "./pages/GamesList";
import HomePage from "./pages/HomePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/games/:queryType",
      element: <GamesList />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;