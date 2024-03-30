import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamesList from "./pages/GamesList";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/games/:queryType/:pageNumber",
      element: <GamesList />,
    },
    {
      path: "/games/:queryType",
      element: <GamesList />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;