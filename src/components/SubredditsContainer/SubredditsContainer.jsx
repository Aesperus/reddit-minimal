import styles from './SubredditsContainer.module.css';
import {useDispatch, useSelector, useStore} from "react-redux";
import {fetchBySubreddit} from "../PostsContainer/postsContainerSlice.js";
import {loadSubreddit, selectSubreddits} from "./subredditsSlice.jsx";
import {useRef} from "react";

// renders a list of subreddits
function SubredditsContainer() {

    // declare selectors for subreddits and the currently loaded subreddit
    const subreddits = useSelector(selectSubreddits);
    const loadedSubreddit = useSelector(state => state.subreddits.loadedSubreddit);
    // declare dispatch
    const dispatch = useDispatch();
    // declare a ref to the currently loaded subreddit
    const subredditRef = useRef(null);

    // access isLoading and error from the store
    const store = useStore();
    const isLoading = store.getState().subreddits.isLoading;
    const error = store.getState().subreddits.error;

    // if the subreddits are still loading, render a loading message
    if(isLoading) {
        return (
            <div className={styles.container}>
                <h2>Subreddits</h2>
                <p>Loading subreddits...</p>
            </div>
        )
    }

    // if there was an error loading the subreddits, render an error message
    if(error) {
        return (
            <div className={styles.container}>
                <h2>Error Loading Subreddits. Please reload the page.</h2>
            </div>
        )
    }

    // clickHandler is called when a subreddit is clicked
    function clickHandler(e) {
        const subreddit = e.target.innerText; // extract the name of the subreddit from the clicked element
        if(subreddit === loadedSubreddit) { // if the subreddit is already loaded, do nothing
            return;
        }
        if(subredditRef.current !== null) {
            subredditRef.current.classList.remove(styles.clicked); // remove the clicked class from the previously clicked element (removes the orange background)
        }
        e.target.classList.add(styles.clicked); // add the clicked class to the clicked element (adds the orange background)/
        subredditRef.current = e.target; // switch the subredditRef to the currently loaded subreddit
        store.dispatch(loadSubreddit(subreddit)) // dispatch loadSubreddit to store the currently loaded subreddit
        dispatch(fetchBySubreddit(subreddit)); // dispatch fetchBySubreddit to fetch posts from the clicked subreddit
    }

    // renders a list of popular subreddits
    // each subreddit is a list item with an image (default image loaded if none is provided) and a title
    // each subreddit is clickable and will load the posts from the subreddit when clicked
    return (
        <div className={styles.container} aria-label="Subreddits">
            <h2>Popular Subreddits</h2>
            <ul aria-label="Subreddit List">
                {subreddits.map(subreddit =>
                    <li
                        onClick={clickHandler}
                        key={subreddit.data.id}
                        title={subreddit.data["public_description"] ? subreddit.data["public_description"] : subreddit.data["display_name"]}>
                        {subreddit.data["icon_img"] ? <img src={subreddit.data["icon_img"]} alt="" /> : <img src="./reddit-minimal-logo.png" alt="" />}
                        {subreddit.data["display_name"]}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SubredditsContainer;