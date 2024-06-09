import Icon from "@ant-design/icons/lib/components/Icon";
import { Button } from "antd";
import { FaBars, FaRegEdit } from "react-icons/fa";
import logo from "src/assets/writesmith-logo.svg";
export const Navbar = () => {
  return (
    <div >
      <Button type="text" icon={<FaBars />} />

      <div>
        <img src={logo} alt="writesmith" />
      </div>
      <div>
        <Button
          type="primary"
          icon={<Icon component={FaRegEdit} />}
          iconPosition="end"
        >
          Write
        </Button>
      </div>
    </div>
  );
};
