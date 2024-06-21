import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from "./components/Menu"
import Home from "./components/Home"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "*",
      element: <Home />,
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
