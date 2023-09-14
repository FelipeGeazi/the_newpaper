// eslint-disable-next-line react/prop-types
export const ContentSection = ({post}) => {
    return (
        <>
        <section>
            <h1>{post.title}</h1>
            <span>{post.author}</span>
            <p>{post.content}</p>
        </section>
        </>
    )
}