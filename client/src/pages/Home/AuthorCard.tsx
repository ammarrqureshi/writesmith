import { Avatar, Button, Card, Typography } from "antd";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthorType } from "src/types/types";

const { Text } = Typography;

export const AuthorCard = ({ authorData }: { authorData: AuthorType }) => {
  return (
    <Link to="/author/123">
      <div>
        <Card size="small">
          <div className="flex gap-4 justify-around items-center">
            <Avatar size={50} src={authorData.avatar} />
            <div className="flex flex-col">
              <Text strong>{authorData.name}</Text>
              <Text>{authorData.designation}</Text>
            </div>
            <Button type="text" icon={<AiOutlineUserAdd size={20} />} />
          </div>
        </Card>
      </div>{" "}
    </Link>
  );
};
