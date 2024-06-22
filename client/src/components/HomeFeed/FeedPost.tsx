import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Suspense } from "react";
import { FaRegComment, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { PostType } from "src/types/types";

interface FeedPostProps {
  data: PostType;
}
export const FeedPost = ({ data }: FeedPostProps) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Card className="w-96" cover={<img alt="example" src={data.img} />}>
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title={data.title}
            description={data.desc}
          />

          <div className="flex justify-between w-full">
            <Button type="link" icon={<FaRegHeart size={20} />} />
            <Button type="link" icon={<FaRegComment size={20} />} />

            <Button type="link" icon={<FaRegPaperPlane size={20} />} />
          </div>
        </Card>
      </Suspense>
    </div>
  );
};
