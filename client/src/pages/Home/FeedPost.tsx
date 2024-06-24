import { Avatar, Button, Card, Typography } from "antd";
import { Suspense } from "react";
import { FaRegComment, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostType } from "src/types/types";

interface FeedPostProps {
  data: PostType;
}

const { Title, Text } = Typography;
export const FeedPost = ({ data }: FeedPostProps) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Card cover={<img alt="example" src={data.img} />}>
          <Text type="secondary">{data.timeToRead}</Text>
          <Link to={`/p/${data.id}`}>
            <Title level={2}>{data.title}</Title>{" "}
          </Link>
          <Link to={`/author/123`}>
            <div className="flex gap-4">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              <div className="flex flex-col">
                <Text>{data.username}</Text>
                <Text type="secondary">
                  {data.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </div>
            </div>
          </Link>
          <div className="flex justify-between w-full py-6">
            <Button type="link" icon={<FaRegHeart size={20} />} />
            <Button type="link" icon={<FaRegComment size={20} />} />

            <Button type="link" icon={<FaRegPaperPlane size={20} />} />
          </div>
        </Card>
      </Suspense>
    </div>
  );
};
