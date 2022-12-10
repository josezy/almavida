import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from "./components/Menu"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: null,
    },
    {
      path: "/menu",
      element: <Menu />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
