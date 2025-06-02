import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";

// async thunk to fetch posts from the Reddit API
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const data = await response.json();
    // handle response codes different from 200 OK
    if (!response.ok) {
        alert("Error fetching posts. Status: " + response.status);
    }
    return data;
})

// posts container slice
const postsContainerSlice = createSlice({
    name: "posts",
    initialState: {
        data: [], // container for posts data
        isLoading: true, // flag to indicate if posts are loading
        error: false, // flag to indicate if an error occurred during fetch
    },
    reducers: { // no reducers for this slice

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false; //set isLoading to false when the API call is successful
            state.data = action.payload.data.children; // set the data to the payload returned by the API call
        });
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true; // set isLoading to true when the API call is pending
        });
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isLoading = false; // set isLoading to false when the API call is rejected
            state.error = true; // set error to true when the API call is rejected
        })
    }
})

// top level selectors for posts and search term
const selectPosts = (state) => state.posts.data;
const selectSearchTerm = (state) => state.search.searchTerm;

// use the search term in state to filter the posts in state
// if the search term is empty, return all posts
export const selectFoundPosts = createSelector([selectPosts, selectSearchTerm], (posts, searchTerm) => {
    if(searchTerm === "")
        return posts;

    return posts.filter(post => post.data.title.toLowerCase().includes(searchTerm.toLowerCase()));
})

export default postsContainerSlice.reducer;