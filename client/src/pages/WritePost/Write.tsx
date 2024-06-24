import Icon from "@ant-design/icons";
import { Avatar, Button, Card, Input, Typography } from "antd";
import {
  AiOutlineArrowRight,
  AiOutlineFileImage,
  AiOutlineSend,
} from "react-icons/ai";
import { FaRegHeart, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Editor } from "./Editor";

const { Title, Text } = Typography;

export const Write = () => {
  return (
    <div>
      <Card className="pb-10">
        <div className="flex justify-between items-center">
          <Link to={`/author/123`}>
            <div className="flex gap-4">
              <Avatar
                size={40}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              />
              <div className="flex flex-col">
                <Text className="text-lg">Ammar Qureshi</Text>
                <Text type="secondary">Lorem ipsum</Text>
              </div>
            </div>
          </Link>

          <Button
            type="primary"
            icon={<Icon component={AiOutlineSend} />}
            iconPosition="end"
          >
            Publish
          </Button>
        </div>

        <Input
          className="text-4xl font-bold py-8"
          variant="borderless"
          placeholder="Type your Title here..."
        />

        <div className="flex gap-4">
          <Button
            type="default"
            icon={<Icon component={AiOutlineFileImage} />}
            iconPosition="end"
          >
            Add Cover Image
          </Button>
          <Button
            type="default"
            icon={<Icon component={AiOutlineArrowRight} />}
            iconPosition="end"
          >
            Select Category
          </Button>
        </div>

        <Editor />
      </Card>
    </div>
  );
};
