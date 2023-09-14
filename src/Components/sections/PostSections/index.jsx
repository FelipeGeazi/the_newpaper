/* eslint-disable react/prop-types */
import { PostCard } from "./PostCard";

export const PostSections = ({ title, postList }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {postList.map((post) => 
          <PostCard key={post.id} post={post} />
        )}
      </ul>
    </section>
  );
};
