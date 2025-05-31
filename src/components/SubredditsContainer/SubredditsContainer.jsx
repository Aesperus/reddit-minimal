import styles from './SubredditsContainer.module.css';

// renders a list of subreddits
function SubredditsContainer() {
    return (
        <div className={styles.container}>
            <h2>Subreddits</h2>
            <ul>
                <li>test</li>
                <li>test2</li>
            </ul>
        </div>
    )
}

export default SubredditsContainer;