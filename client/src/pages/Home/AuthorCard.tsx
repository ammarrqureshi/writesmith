import { Avatar, Button, Card, Typography } from "antd";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AuthorType } from "src/types/types";

const { Text, Title } = Typography;

export const AuthorCard = ({ authorData }: { authorData: AuthorType }) => {
  return (
    <div>
      <Card size="small">
        <div className="flex gap-4 justify-around">
          <Avatar size={40} src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <div className="flex flex-col">
            <Text strong >{authorData.name}</Text>
            <Text>{authorData.designation}</Text>
          </div>
          <Button type="text" icon={<AiOutlineUserAdd size={20} />} />
        </div>
      </Card>
    </div>
  );
};
