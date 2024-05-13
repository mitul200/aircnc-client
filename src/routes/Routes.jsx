import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import Categoris from "../Component/Categoris/Categoris";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import RoomsDetails from "../pages/RoomDetails/RoomsDetails";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomsDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SingUp />,
  },
]);
