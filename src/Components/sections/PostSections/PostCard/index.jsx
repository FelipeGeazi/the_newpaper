/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const PostCard = ({ post }) => {
  return (
    <li>
      <h3 className="title two">{post.title}</h3>
      <Link className="link" to={`/post/${post.id}`}>
        Ler Mais ...
      </Link>
    </li>
  );
};
