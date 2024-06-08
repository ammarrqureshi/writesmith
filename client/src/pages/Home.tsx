import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PostPage } from "./PostPage";

export const Home = () => {
  return (
    <div >
      <PostPage/>
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
      <Link to="/register">
        <Button type="default">Register</Button>
      </Link>
    </div>
  );
};
