/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <li>
      <h3>{post.title}</h3>
      <Link to={`/post/${post.id}`}>Ler Mais ...</Link>
    </li>
  );
};
