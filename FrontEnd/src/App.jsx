import React from "react";
import {  createBrowserRouter,RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import AddUser from "./components/Adduser";
import UserList from "./components/UserList";
import User from "./components/User";

function App() {
  const routingObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "add-user", element: <AddUser /> },
        { path: "user-list", element: <UserList /> },
        { path: "user", element: <User /> },
      ],
    },
  ]);

  return <RouterProvider router={routingObj} />;
}

export default App;