import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import PostPage from "../pages/PostPage";
import Author from "../pages/Author";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RootLayout, { loader as rootLoader } from "./RootLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "posts/:postId",
        element: <PostPage />,
      },
      {
        path: "author",
        element: <Author />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
