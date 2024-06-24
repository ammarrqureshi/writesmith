import Icon from "@ant-design/icons/lib/components/Icon";
import { Avatar, Button } from "antd";
import { FaGripLines, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import userimg from "src/assets/amq-dp.jpeg";
import logo from "src/assets/writesmith-logo.svg";

export const Navbar = () => {
  const isLoggedIn = true;
  return (
    <div className=" flex justify-between items-center px-4 py-1 border-b">
      <Button type="text" icon={<FaGripLines size={30} />} />

      <div className="py-2">
        <Link to="/">
          <img src={logo} alt="writesmith" />
        </Link>
      </div>
      <div className="flex gap-6">
        {isLoggedIn ? (
          <div className="flex gap-4">
            <Button
            href="/write"
              type="primary"
              icon={<Icon component={FaRegEdit} />}
              iconPosition="end"
            >
              Write
            </Button>
            <Avatar src={userimg} size={45} alt="avatar">
              A
            </Avatar>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
            <Link to="/register">
              <Button type="default">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
