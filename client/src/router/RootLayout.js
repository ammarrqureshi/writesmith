import { Outlet, Form } from "react-router-dom";
import Header from "../components/Header";
// import { getPosts } from "../posts";

// export async function loader() {
//   const posts= await getPosts();
//   return { posts };
// }

function RootLayout() {
  return (
    <>
      <div className="App">
        <Header />
        <Form action="/posts/1" method="POST">
          <input type="text" placeholder="title" />
          <input type="text-area" placeholder="write here..." />
          <button>Create Post</button>
        </Form>
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
