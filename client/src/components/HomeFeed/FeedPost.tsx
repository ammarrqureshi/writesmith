import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PostType } from "src/types/types";

interface FeedPostProps {
  data: PostType;
}
export const FeedPost = ({ data }: FeedPostProps) => {
  return (
    <div>
      <Card className="w-96" cover={<img alt="example" src={data.img} />}>
        <Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          }
          title={data.title}
          description={data.desc}
        />
      </Card>
    </div>
  );
};
