import { Button, Card, Input, Typography } from "antd";

const { Title } = Typography;

export const NewsletterForm = () => {
  return (
    <div>
      <Card>
        <Title level={3}>Subscribe to Weekly Tidbits</Title>
        <form className="flex flex-col gap-4" action="">
          <Input size="large" placeholder="Enter your email..." />
          <Button type="primary">Submit</Button>
        </form>
      </Card>
    </div>
  );
};
