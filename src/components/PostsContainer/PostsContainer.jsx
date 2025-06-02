import styles from "./PostsContainer.module.css";
import Post from "../Post/Post.jsx";
import {selectFoundPosts} from "./postsContainerSlice.js";
import {useSelector, useStore} from "react-redux";
import {v4 as uuidv4} from "uuid";

function PostsContainer() {
    // call a selector to filter posts by search term
    const posts = useSelector(selectFoundPosts);

    // using the store reference, extract isLoading and error
    const store = useStore();
    const isLoading = store.getState().posts.isLoading;
    const error = store.getState().posts.error;

    // if the posts are still loading, render a loading message
    if(isLoading) {
        return (
            <div className={ styles.container }>
                <h2>Loading Posts...</h2>
            </div>
        )
    }

    // if there was an error loading the posts, render an error message
    if(error) {
        return (
            <div className={ styles.container }>
                <h2>Error Loading Posts. Please reload the page.</h2>
            </div>
        )
    }

    // if there are no posts returned by the filter, render a message
    // if there are posts, render them
    return (
        <div className={ styles.container }>
            { posts.length === 0 ? <h2>No posts match your search term.</h2> : posts.map(post => <Post post={post} key={uuidv4()}/>)}
        </div>
    )
}

export default PostsContainer;