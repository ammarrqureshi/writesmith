import { Avatar, Card, Typography } from "antd";
import { AuthorType } from "src/types/types";

const { Text, Title } = Typography;

export const AuthorCard = ({ authorData }: { authorData: AuthorType }) => {
  return (
    <div>
      <Card>
        <div>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <div>
            <Title level={5}>{authorData.name}</Title>
            <Text>{authorData.designation}</Text>
          </div>
        </div>
      </Card>
    </div>
  );
};
