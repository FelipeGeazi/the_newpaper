/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const ContentSection = ({ post }) => {
  return post ? (
    <section>
      <div className="container sm">
        <h2 className=" title blog center">{post.title}</h2>
        <span className="paragraph bold center">{post.author}</span>
        <p className="paragraph center">{post.content}</p>
      </div>
    </section>
  ) : null;
};
