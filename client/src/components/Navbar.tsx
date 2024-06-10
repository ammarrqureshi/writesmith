import Icon from "@ant-design/icons/lib/components/Icon";
import { Avatar, Button } from "antd";
import { FaGripLines, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import userimg from "src/assets/amq-dp.jpeg";
import logo from "src/assets/writesmith-logo.svg";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-4 py-1 border-b">
      <Button type="text" icon={<FaGripLines size={30} />} />

      <div className="py-2">
        <Link to="/">
          <img src={logo} alt="writesmith" />
        </Link>
      </div>
      <div className="flex gap-6">
        <Button
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
    </div>
  );
};
