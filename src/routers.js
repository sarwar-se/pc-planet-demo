import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NoMatch from "./components/pattern/NoMatch";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { Dashboard } = await import("./pages/index.js");
          return { Component: Dashboard };
        },
      },
      {
        path: "add-product",
        lazy: async () => {
          const { AddProduct } = await import("./pages/index.js");
          return { Component: AddProduct };
        },
      },
      {
        path: ":category",
        lazy: async () => {
          const { FindCategoryWise } = await import("./pages/index.js");
          return { Component: FindCategoryWise };
        },
      },
    ],
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);
