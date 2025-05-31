import styles from "./Post.module.css"

// renders a single post
function Post({post}) {
    // extract data from post object
    const { title, author, num_comments, permalink } = post.data

    // use the extracted data to render the post
    return (
        <div className={ styles.post }>
            <h2>{title}</h2>
            <hr />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p>by {author}</p>
                <p>{permalink}</p>
                <p>comments: {num_comments}</p>
            </div>
        </div>
    )
}

export default Post;