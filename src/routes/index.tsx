import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Users } from "../pages/users";
import { Products } from "../pages/products";
import App from "../App";
import { Login } from "../pages/login";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ],
  { basename: "/energy-rent" }
);

export default routes;
