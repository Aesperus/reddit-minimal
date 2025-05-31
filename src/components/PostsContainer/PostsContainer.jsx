import styles from "./PostsContainer.module.css";
import Post from "../Post/Post.jsx";
import {selectFoundPosts} from "./postsContainerSlice.js";
import {useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";

function PostsContainer() {
    // call a selector to filter posts by search term
    const posts = useSelector(selectFoundPosts);

    // if there are no posts returned by the filter, render a message
    // if there are posts, render them
    return (
        <div className={ styles.container }>
            { posts.length === 0 ? <h2>No posts match your search term.</h2> : posts.map(post => <Post post={post} key={uuidv4()}/>)}
        </div>
    )
}

export default PostsContainer;