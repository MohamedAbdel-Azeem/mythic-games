import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Page1 from "./pages/page1";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "page1",
        element: <Page1 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;