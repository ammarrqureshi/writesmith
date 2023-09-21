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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/p/post-page",
    element: <PostPage/>
  },
  {
    path: "/author",
    element: <Author/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

