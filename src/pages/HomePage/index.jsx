import { useEffect, useState } from "react";
import { BannerSection } from "../../Components/sections/BannerSection";
import { PostSections } from "../../Components/sections/PostSections";
import { blogApi } from "../../services/api";

export const HomePage = () => {
  const [PostList, setPostList] = useState([]);
  
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await blogApi.get("/news");
        let newData = data.reverse();
        newData.length = 2;
        setPostList(newData);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <BannerSection src="" alt="Banner de Home Page" />
      <PostSections title="Últimas Noticias" postList={PostList} />
    </>
  );
};
