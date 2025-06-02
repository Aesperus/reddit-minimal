import styles from "./Post.module.css"

// renders a single post
function Post({post}) {
    // extract data from post object
    const { title, author, num_comments, permalink } = post.data

    // use the extracted data to render the post
    return (
        <div className={ styles.post }>
            <h2 aria-label={"Post Title"}>{title}</h2>
            <hr />
            <div style={{display: "flex", justifyContent: "space-between"}} aria-label={"Post Info"}>
                <p aria-label={"Post Author"}>by {author}</p>
                <p aria-label={"Permanent Link to Post"}>{permalink}</p>
                <p aria-label={"Number of Post Comments"}>comments: {num_comments}</p>
            </div>
        </div>
    )
}

export default Post;