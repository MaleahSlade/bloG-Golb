import { posts } from "../lib/posts";
import RatingsListItem from "./RatingsListItem";

export default function RatingsList() {
  return (
    <div>
      {posts.map((post) => (
        <RatingsListItem key={post.id} post={post} />
      ))}
    </div>
  );
}