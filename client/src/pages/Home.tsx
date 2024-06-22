import { FeedPost } from "src/components/HomeFeed/FeedPost";
export const Home = () => {
  const posts = [
    {
      id: 1,
      title: "How to get a new laptop for development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt blandit magna non tempus. Orci varius natoque penatibus et magnis dis parturient montes, ",
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
  return (
    <div>
      {posts.map((post) => (
        <FeedPost data={post} />
      ))}
    </div>
  );
};
