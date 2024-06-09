import { Button, Card, Checkbox, Input } from "antd";
import { Key, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Card title="Login">
        <form action="" className="flex flex-col gap-4 min-w-80">
          <Input size="large" placeholder="Enter Username" prefix={<User />} />
          <Input.Password
            size="large"
            placeholder="Enter Password"
            prefix={<Key />}
          />
          <Checkbox>Remember me</Checkbox>
          <Button className="self-start" type="link">
            Forgot your password?
          </Button>
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
          <Link to="/register">
            <Button type="default" className="w-full">
              Create New Account
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};
