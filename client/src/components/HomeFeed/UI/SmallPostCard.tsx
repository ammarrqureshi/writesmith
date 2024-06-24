import { Avatar, Button, Card, Typography } from "antd";
import { FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostType } from "src/types/types";

const { Title, Text } = Typography;

export const SmallPostCard = ({ postData }: { postData: PostType }) => {
  return (
    <Card cover={<img alt="related" src={postData.img} />}>
      <Link to={`/p/${postData.id}`}>
        <Title level={4}>{postData.title}</Title>{" "}
      </Link>
      <div className="flex gap-4 items-center">
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />

        <Text>{postData.username}</Text>
      </div>

      <div className="flex gap-6 justify-between pt-6">
        <Button type="link" icon={<FaRegHeart size={20} />} />
        <Button type="link" icon={<FaRegPaperPlane size={20} />} />
      </div>
    </Card>
  );
};
