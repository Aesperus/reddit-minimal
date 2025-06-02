import styles from './SubredditsContainer.module.css';

// renders a list of subreddits
function SubredditsContainer() {
    return (
        <div className={styles.container} aria-label="Subreddits">
            <h2>Subreddits</h2>
            <ul aria-label="Subreddit List">
                <li>test</li>
                <li>test2</li>
            </ul>
        </div>
    )
}

export default SubredditsContainer;