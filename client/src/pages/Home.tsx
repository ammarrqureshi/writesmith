import { Button } from "antd";
import { Link } from "react-router-dom";
export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "How to get a new laptop for development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
    },
    {
      id: 2,
      title: "consectetur adipiscing elit. Integer tincidunt blandit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
    },
    {
      id: 4,
      title: "Donec ut congue sapien. Mauris mattis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
      <Link to="/register">
        <Button type="default">Register</Button>
      </Link>
    </div>
  );
};
