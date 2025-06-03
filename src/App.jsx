import './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import PostsContainer from "./components/PostsContainer/PostsContainer.jsx";
import styles from "./App.module.css";
import SubredditsContainer from "./components/SubredditsContainer/SubredditsContainer.jsx";
import {fetchPosts} from "./components/PostsContainer/postsContainerSlice.js";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchSubreddits} from "./components/SubredditsContainer/subredditsSlice.jsx";

function App() {
    // declare dispatch
    const dispatch = useDispatch();
    // call fetchPosts to fetch posts from the Reddit API when the app loads
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    // call fetchSubreddits to fetch subreddits from the Reddit API when the app loads
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, []);

    // render SearchBar, PostContainer and SubredditContainer
    return (
        <div>
            <SearchBar />
            <div className={ styles.containers }>
                <PostsContainer />
                <SubredditsContainer />
            </div>
        </div>
    );
}

export default App