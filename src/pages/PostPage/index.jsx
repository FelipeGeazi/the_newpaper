import { useNavigate, useParams } from "react-router-dom";
import { ContentSection } from "../../Components/sections/ContentSection";
import { PostList } from "../../data/PostList";
import { PostSections } from "../../Components/sections/PostSections";
import { useEffect, useState } from "react";
import { blogApi } from "../../services/api";
import { ErrorPage } from "../ErrorPage";

export const PostPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentPost, setcurrentPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    scrollTo(0, 0);
    const getPost = async () => {
      try {
        setLoading(true);
        const { data } = await blogApi.get(`news/${id}`);
        setcurrentPost(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        navigate("/inesistente"); // apenas para mostrar na barra de pesquisa
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  return (
    <>
      {loading ? <p>Carregando ... </p> : <ContentSection post={currentPost} />}
      <PostSections title="Leia tambem" postList={PostList} />
    </>
  );
};
