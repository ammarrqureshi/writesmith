import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { PostPage } from "./pages/PostPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Oops!  where have you come you stupid! </h1> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/p/:id",
        element: <PostPage />,
      },
      {
        path: "/write",
        element: <h1>write here...</h1>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />{" "}
      </div>
    </>
  );
}

export default App;
