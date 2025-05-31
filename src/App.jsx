import './App.module.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import PostsContainer from "./components/PostsContainer/PostsContainer.jsx";
import styles from "./App.module.css";

function App() {
    // render SearchBar and PostContainer
    return (
        <div>
            <SearchBar />
            <div className={ styles.containers }>
                <PostsContainer />
                <div>Test</div>
            </div>
        </div>
    );
}

export default App