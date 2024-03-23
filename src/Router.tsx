import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./pages/page1";
import HomePage from "./pages/HomePage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/page1",
      element: <Page1 />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;