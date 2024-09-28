import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Edit from "./Edit";
import AddBook from "./AddBox";
import { Navigate } from "react-router-dom";
import TopBar from "./TopBar";
import FullDetails from "./FullDetails";

const AppRoutes = [
    {
      path: "/",
      exact: true,
      element: <> <TopBar/> <Home /> </>,
    },
    {
      path: "/dashboard",
      exact: true,
      element: <> <TopBar/> <Dashboard/> </>,
    },
    {
      path: "/edit/:id",
      exact: true,
      element: <> <TopBar/> <Edit /> </>,
    },
    {
      path: "/add-book",
      exact: true,
      element: <> <TopBar/> <AddBook /> </>,
    },
    {
      path: "/full-details/:id",
      exact: true,
      element: <> <TopBar/> <FullDetails /> </>,
    },
    {
      path: "/*",
      exact: true,
      element: <Navigate to="/" />,
    },
  ];
  
  export default AppRoutes;