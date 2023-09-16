import { useNavigate, useParams } from "react-router-dom";
import { ContentSection } from "../../Components/sections/ContentSection";
import { PostSections } from "../../Components/sections/PostSections";
import { useEffect, useState } from "react";
import { blogApi } from "../../services/api";
import { BannerSection } from "../../Components/sections/BannerSection";
import Banner from "../../assets/banner.jpg";

export const PostPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [currentPost, setcurrentPost] = useState({});
  const [PostList, setPostList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await blogApi.get("/news");
        let newData = data.filter((post) => post.id !== Number(id));
        newData.reverse();
        newData.length = 2;
        setPostList(newData);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, [id]);

  useEffect(() => {
    scrollTo(0, 0);
    const getPost = async () => {
      try {
        setLoading(true);
        const { data } = await blogApi.get(`news/${id}`);
        setcurrentPost(data);
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
      {loading ? (
        <h1>Carregando ... </h1>
      ) : (
        <>
          <BannerSection img={Banner} alt="Banner de Noticias" />
          <ContentSection post={currentPost} />
          <PostSections title="Últimas Noticias" postList={PostList} />
        </>
      )}
    </>
  );
};
