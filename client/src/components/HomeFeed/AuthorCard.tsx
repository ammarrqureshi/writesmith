import { Avatar, Button, Card, Typography } from "antd";
import { FaUserPlus } from "react-icons/fa";
import { AuthorType } from "src/types/types";

const { Text, Title } = Typography;

export const AuthorCard = ({ authorData }: { authorData: AuthorType }) => {
  return (
    <div>
      <Card>
        <div className="flex gap-4">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <div className="flex flex-col">
            <Title level={5}>{authorData.name}</Title>
            <Text>{authorData.designation}</Text>
          </div>
          <Button type="text" icon={<FaUserPlus size={20} />} />
        </div>
      </Card>
    </div>
  );
};
