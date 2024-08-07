import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { PostPage } from "./pages/SinglePost/PostPage";
import { Login } from "./pages/UserAuth/Login";
import { Register } from "./pages/UserAuth/Register";
import { Write } from "./pages/WritePost/Write";
import { Button } from "antd";
import { FaRegEdit } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-8">
        <Link to={"/write"}>
          <Button
            className="fixed bottom-5 right-5"
            type="primary"
            shape="circle"
            icon={<FaRegEdit size={20} />}
          />
        </Link>
        <Outlet />
      </div>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <h1 className="w-full text-center text-3xl py-8">
        Oops! You did something stupid!{" "}
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/p/:id",
        element: (
          <PostPage
            postData={{
              id: 2,
              title: "consectetur adipiscing elit. Integer tincidunt blandit",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
              img: "https://picsum.photos/400/300",
              username: "Ammar Qureshi",
              createdAt: new Date("23-06-2023"),
              timeToRead: "7 minutes read",
            }}
          />
        ),
      },
      {
        path: "/write",
        element: <Write />,
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
