import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { RootLayout } from "./Pages/RootLayout";
import AddPost from "./Pages/AddPost"
import EditPost from "./Pages/EditPost"
import PostDetails from "./Pages/PostDetails";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPage";
const router = createBrowserRouter([
  {path:"/",
  element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {index:true,element:<Index/>},
    {path:"post",element:<Index/>},
    {path:"post/add",element:<AddPost/>},
    {path:"post/:id",element:<PostDetails/>},
    {path:"post/:id/edit",element:<EditPost/>},

  ]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
