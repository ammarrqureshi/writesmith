import { Button, Card, Checkbox, Input } from "antd";
import { LuKey, LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <Card title="Login">
        <form action="" className="flex flex-col gap-4 min-w-80">
          <Input
            size="large"
            placeholder="Enter Username"
            prefix={<LuUser />}
          />
          <Input.Password
            size="large"
            placeholder="Enter Password"
            prefix={<LuKey />}
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
          OR
          <Button type="default" className="w-full">
            Sign In with Google
          </Button>
        </form>
      </Card>
    </div>
  );
};
