import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/index";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";
import { RootLayout } from "./Pages/RootLayout";

// lines 13 to 15 was replaced to use lazey loading
// import AddPost from "./Pages/AddPost";
// import EditPost from "./Pages/EditPost";
// import PostDetails from "./Pages/PostDetails";

// import WithGuard from "./components/WithGuard"; hoc approach

const AddPost = lazy(() => import("./Pages/AddPost"));
const EditPost = lazy(() => import("./Pages/EditPost"));
const PostDetails = lazy(() => import("./Pages/PostDetails"));

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
          <Suspense fallback="loading please wait">
            <AddPost />
          </Suspense>
          // </WithGuard>
        ),
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="loading please wait">
            <PostDetails />
          </Suspense>
        ),
        loader: postParamsHandler,
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="loading please wait">
            <EditPost />
          </Suspense>
        ),
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
