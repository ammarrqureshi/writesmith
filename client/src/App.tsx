import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { DatePicker } from "antd";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
