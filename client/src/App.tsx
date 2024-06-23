import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PostPage } from "./pages/PostPage";
import { Register } from "./pages/Register";

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
    // errorElement: <h1 className="w-full text-center text-3xl py-8">Oops! You did something stupid! </h1>,
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
