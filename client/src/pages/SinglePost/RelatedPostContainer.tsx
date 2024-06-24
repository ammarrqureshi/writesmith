import { SmallPostCard } from "src/components/UI/SmallPostCard";
import { PostType } from "src/types/types";

export const RelatedPostContainer = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="flex gap-6 justify-between ">
      {posts.map((post) => (
        <SmallPostCard postData={post} />
      ))}
    </div>
  );
};
