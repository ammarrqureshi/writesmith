import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { Key, User } from "lucide-react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Login = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Button type="default" htmlType="submit">
            Create New Account
          </Button>
        </form>
      </Card>
    </div>
  );
};
