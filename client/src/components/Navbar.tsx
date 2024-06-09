import { Button } from "antd";
import { Text } from "lucide-react";

export const Navbar = () => {
  return (
    <div>
      <Button type="text" icon={<Text />} />

      <div>
        <img src="./assets/writesmith-logo.svg" alt="" />
      </div>
    </div>
  );
};
