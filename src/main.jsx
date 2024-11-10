import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Errorpage from "./components/Errorpage/Errorpage";
import Cards from "./components/Cards/Cards";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Statistics from "./components/Statistics/Statistics";
import About from "./components/About/About";
import SelectedCart from "./components/SelectedCart/SelectedCart";
import Wishlist from "./components/Wishlist/Wishlist";
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Cards></Cards>,
        loader: () => fetch("/GadgetData.json"),
      },
      {
        path: "/details/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/GadgetData.json"),
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <SelectedCart></SelectedCart>,
            loader: () => fetch("/GadgetData.json"),
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist />,
            loader: () => fetch("/GadgetData.json")
          },
        ]
      },
      
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: '/about',
        element: <About></About>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
