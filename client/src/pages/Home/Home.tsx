import { Tabs, Tag, Typography } from "antd";
import { AuthorsContainer } from "src/pages/Home/AuthorsContainer";
import { FeedPost } from "src/pages/Home/FeedPost";
import { NewsletterForm } from "./NewsletterForm";
import { useState } from "react";

const { Title } = Typography;

export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "How to get a new laptop for development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, pus. Orci varius natoque penatibus et magnpus. Orci varius natoque penatibus et magnpus. Orci varius natoque penatibus et magn ",
      img: "https://picsum.photos/400/300",
      username: "Ammar Qureshi",
      createdAt: new Date("06-23-2023"),
      timeToRead: "7 minutes read",
    },
    {
      id: 2,
      title: "consectetur adipiscing elit. Integer tincidunt blandit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
      username: "Ammar Qureshi",
      createdAt: new Date("23-06-2023"),
      timeToRead: "7 minutes read",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
      username: "Ammar Qureshi",
      createdAt: new Date("23-06-2023"),
      timeToRead: "7 minutes read",
    },
    {
      id: 4,
      title: "Donec ut congue sapien. Mauris mattis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
      img: "https://picsum.photos/400/300",
      username: "Ammar Qureshi",
      createdAt: new Date("23-06-2023"),
      timeToRead: "7 minutes read",
    },
  ];

  const tagsData= ['All', 'Software', 'Art', 'Science']
  const [selectedTag, setSelectedTag] = useState<string>('All')
  return (
    <>
      <div className="grid grid-cols-3 gap-x-20 relative ">
        
        <Tabs
          className="col-span-2"
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: "For you",
              children: (
                <div className=" flex flex-col gap-10">
<div>
{tagsData.map<React.ReactNode>((tag) => (
        <Tag.CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </Tag.CheckableTag>
</div>
                  {posts.map((post) => (
                
                    <FeedPost key={post.id} data={post} />
                  ))}
                </div>
              ),
            },
            {
              key: "2",
              label: "Following",
              children: (
                <div className=" flex  flex-col-reverse gap-10">
                  {posts.map((post) => (
                    <FeedPost key={post.id} data={post} />
                  ))}
                </div>
              ),
            },
          ]}
        />

        <div className="flex flex-col gap-10 sticky top-5 h-fit">
          <div>
            <Title level={3}>Top Authors</Title>
            <AuthorsContainer />
          </div>

          <NewsletterForm />
        </div>
      </div>
    </>
  );
};
