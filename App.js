import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Restaurant from "./Restaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import  About  from "./About";
import  ContactUs   from "./ContactUs";
import  Error  from "./Error";
import RestaurantMenu from "./RestaurantMenu";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      {/* <Body />
      <Restaurant /> */}
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
