import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamesList from "./pages/GamesList";
import HomePage from "./pages/HomePage";
import NotFoundErrorPage from "./pages/NotFounfErrorPage";
import ErrorPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <NotFoundErrorPage />,
    },
    {
      path: "/games/:queryType/:pageNumber",
      element: <GamesList />,
    },
    {
      path: "/games/:queryType",
      element: <GamesList />,
    },
    {
      path: "/games/:queryType/:pageNumber/:id",
      element: <GamePage />,
      errorElement: <ErrorPage />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;