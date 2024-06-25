import { AuthorCard } from "./AuthorCard";

const authors = [
  {
    id: 1,
    name: "Chris Ahmed",
    designation: "Digital Entrepreneur and Creator",
    joinedDate: new Date("06-22-2014"),
    avatar: "https://picsum.photos/id/64/300/200",
  },
  {
    id: 2,
    name: "Ammar Qureshi",
    designation: "Digital Entrepreneur and Creator",
    joinedDate: new Date("06-22-2014"),
    avatar: "https://picsum.photos/id/237/300/200",
  },
  {
    id: 3,
    name: "Usama Kamran",
    designation: "Digital Entrepreneur and Creator",
    joinedDate: new Date("06-22-2014"),
    avatar: "https://picsum.photos/id/669/486/345",
  },
  {
    id: 4,
    name: "Noman Hussain",
    designation: "Digital Entrepreneur and Creator",
    joinedDate: new Date("06-22-2014"),
    avatar: "https://picsum.photos/id/823/500/333 ",
  },
];

export const AuthorsContainer = () => {
  return (
    <div className=" flex  flex-col gap-2 ">
      {authors.map((author) => (
        <AuthorCard key={author.id} authorData={author} />
      ))}
    </div>
  );
};
