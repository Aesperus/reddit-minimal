import React from "react";
import styles from "./SearchBar.module.css";

// renders the search bar component
function SearchBar() {
    // the search bar component consists of a logo section and a search section
    // the logo section contains the logo and the application title
    // the search section contains the search input and the search button
    return (
        <div className={styles.searchBar} aria-label="Search Bar">
            <div id={styles.logoContainer}>
                <img
                    aria-label="Logo"
                    src="../../../public/reddit-minimal-logo.png"
                    alt="Reddit Minimal Logo"
                    role="image"
                    title="Reddit Minimal"
                    width={32}
                    height={32}
                />
                <h1 aria-label="Application Title">Reddit Minimal</h1>
            </div>
            <div id={styles.searchContainer}>
                <label htmlFor="search"></label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    type="submit"
                    aria-label="Search Button"
                >
                    <img src="../../../public/search.png"
                         alt="Search Icon"
                         aria-label="Search Icon"
                         tabIndex={0}
                    />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;