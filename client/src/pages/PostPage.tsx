import { Card, Avatar, Button, Typography } from "antd";
import { Suspense } from "react";
import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostType } from "src/types/types";

const { Text, Title } = Typography;
export const PostPage = ({ postData }: { postData: PostType }) => {
  return (
    <div className="max-w-6xl mx-auto py-8 ">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Card>
          <Text type="secondary">{postData.timeToRead}</Text>
          <Link to={`/p/${postData.id}`}>
            <Title level={2}>{postData.title}</Title>{" "}
          </Link>
          <Link to={`/author/123`}>
            <div className="flex gap-4">
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              <div className="flex flex-col">
                <Text>{postData.username}</Text>
                <Text type="secondary">
                  {postData.createdAt.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </div>
            </div>
          </Link>
          <div className="w-full overflow-hidden rounded-lg my-6">
            <img className="w-full" alt="example" src={postData.img} />
          </div>
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
