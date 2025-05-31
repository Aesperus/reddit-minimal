import './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import PostsContainer from "./components/PostsContainer/PostsContainer.jsx";
import styles from "./App.module.css";
import SubredditsContainer from "./components/SubredditsContainer/SubredditsContainer.jsx";

function App() {
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