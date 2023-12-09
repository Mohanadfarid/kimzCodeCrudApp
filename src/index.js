import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/index";

import { RootLayout } from "./Pages/RootLayout";
import AddPost from "./Pages/AddPost";
import EditPost from "./Pages/EditPost";
import PostDetails from "./Pages/PostDetails";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";
// import WithGuard from "./components/WithGuard"; hoc approach 

const postParamsHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct post id",
      status: 400,
    });
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: "post", element: <Index /> },
      {
        path: "post/add",
        element: (
          // <WithGuard> 
          // the commented section is the hoc approach
          //we can use this approach or the hof inside the component it self
            <AddPost />
          // </WithGuard>
        ),
      },
      {
        path: "post/:id",
        element: <PostDetails />,
        loader: postParamsHandler,
      },
      {
        path: "post/:id/edit",
        element: <EditPost />,
        loader: postParamsHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
