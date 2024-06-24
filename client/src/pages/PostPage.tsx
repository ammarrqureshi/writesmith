import Icon from "@ant-design/icons";
import { Avatar, Button, Card, Typography } from "antd";
import { Suspense } from "react";
import { AiOutlineExport, AiOutlineHome } from "react-icons/ai";
import { FaPlus, FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SmallPostCard } from "src/components/HomeFeed/UI/SmallPostCard";
import { PostType } from "src/types/types";

const { Text, Title } = Typography;
export const PostPage = ({ postData }: { postData: PostType }) => {
  return (
    <div className="max-w-6xl mx-auto py-8 ">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Card>
          <div className="flex justify-between items-center">
            <Text type="secondary">{postData.timeToRead}</Text>
            <Button type="link" icon={<AiOutlineExport size={20} />} />
          </div>

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
              <Button
                type="primary"
                icon={<Icon component={FaPlus} />}
                iconPosition="end"
              >
                Follow
              </Button>
            </div>
          </Link>
          <div className="flex gap-6 justify-end py-6">
            <Button type="link" icon={<FaRegHeart size={20} />} />
            <Button type="link" icon={<FaRegPaperPlane size={20} />} />
          </div>
          <div className="w-full overflow-hidden object-cover rounded-lg my-6">
            <img
              className="w-full max-h-[70vh] object-cover"
              alt="cover-image"
              src={postData.img}
            />
          </div>

          <div id="blog-body" className="max-w-[80%] mx-auto">
            <h1>Hello guyes this is a heading</h1>
            <p>
              Lorem ipsum dolor sit amet, <strong>wiow o </strong>consectetur
              adipiscing elit. Integer tincidunt{" "}
              <a href="#hello">this is link </a> blandit magna non tempus. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam a lacinia erat. Sed gravida tincidunt magna.
              Maecenas eget posuere arcu, a dictum odio. Suspendisse potenti.
              Nulla facilisi. Curabitur consectetur sed diam et ullamcorper.
              Nulla pharetra rhoncus enim in ornare.
            </p>
          </div>
        </Card>
      </Suspense>
      <div className=" mt-20 flex flex-col gap-16 justify-between">
        <Title level={3}>More Posts</Title>
        <div className="flex gap-6 justify-between ">
          {/* {postData.map((post) => (
            <SmallPostCard postData={post} />
          ))} */}
          <SmallPostCard postData={postData} />
        </div>

        <Button
          className="self-center mt-20"
          type="primary"
          icon={<Icon component={AiOutlineHome} />}
          iconPosition="end"
        >
          Go to
        </Button>
      </div>
    </div>
  );
};
