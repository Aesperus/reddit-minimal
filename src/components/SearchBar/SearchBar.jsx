import React from "react";
import styles from "./SearchBar.module.css";
import {selectSearchTerm, startSearch} from "./searchBarSlice.js";
import { useDispatch, useSelector } from "react-redux";

// renders the search bar component
function SearchBar() {
    const dispatch = useDispatch();
    const currentSearchTerm = useSelector(selectSearchTerm);

    function checkKey(event) {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    function handleClick() {
        const searchTerm = document.getElementById("search");
        if (searchTerm.value === currentSearchTerm) {
            return;
        }
        dispatch(startSearch(searchTerm.value));
    }

    // the search bar component consists of a logo section and a search section
    // the logo section contains the logo and the application title
    // the search section contains the search input and the search button
    return (
        <div className={styles.searchBar} aria-label="Search Bar">
            <div id={styles.logoContainer}>
                <a aria-label="Reddit Logo"
                   href="https://www.reddit.com/"
                   role="link"
                   tabIndex={0}
                   target="_blank"
                >
                    <img
                        aria-label="Logo Image"
                        alt="Reddit Minimal Logo"
                        height={32}
                        role="image"
                        src="../../../public/reddit-minimal-logo.png"
                        title="Reddit Minimal"
                        width={32}
                    />
                </a>
                <h1 aria-label="Application Title" role="heading">Reddit Minimal</h1>
            </div>
            <div id={styles.searchContainer}>
                <input
                    aria-label="Search"
                    id="search"
                    maxLength={50}
                    onKeyDown={checkKey}
                    placeholder="Search"
                    role="textbox"
                    type="text"
                />
                <button
                    aria-label="Search Button"
                    onClick={handleClick}
                    role="button"
                    type="submit"
                >
                    <img
                        alt="Search Icon"
                        aria-label="Search Icon"
                        role="image"
                        src="../../../public/search.png"
                        tabIndex={0}
                        title="Search"
                    />
                </button>
            </div>
        </div>
    )
}

export default SearchBar;