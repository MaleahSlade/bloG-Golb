import { useParams, Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function RatingDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <Link to="/blog">Back to Ratings</Link>
      </div>
    );
  }

  return (
    <div className="rating-card">
      <h1>{post.title}</h1>
      <p>Restaurant: {post.restaurant}</p>
      <p>Date of Visit: {post.dateOfVisit}</p>
      <p>Location: {post.location}</p>
      <p>Ramen Sampled: {post.ramenSampled}</p>
      <p>{post.content}</p>
      <p>Rating (Out of 5): {post.rating}</p>
      <Link to="/blog">← Back to Ratings</Link>
    </div>
  );
}