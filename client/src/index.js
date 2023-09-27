import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import PostPage from './pages/PostPage';
import Author from './pages/Author';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "p/post-page",
    element: <PostPage/>
  },
  {
    path: "author",
    element: <Author/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signup",
    element: <SignUp/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

