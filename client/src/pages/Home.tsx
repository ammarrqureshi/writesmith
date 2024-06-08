import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
      <Link to="/register">
        <Button type="default">Register</Button>
      </Link>
    </div>
  );
};
