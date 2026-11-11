import { Link } from "react-router-dom";

export default function RatingsListItem({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="rating-card">
      <h3>{post.title}</h3>
      <p>Restaurant: {post.restaurant}</p>
      <p>Date of Visit: {post.dateOfVisit}</p>
      <p>Location: {post.location}</p>
      <p>Ramen Sampled: {post.ramenSampled}</p>
      <p>Description: {post.content}</p>
      <p>Rating (Out of 5): {post.rating}</p>
    </Link>
  );
}