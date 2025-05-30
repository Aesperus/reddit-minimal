import { createSlice } from "@reduxjs/toolkit";

// initial search term state
const initialState = {
    searchTerm: "",
}

// create the slice named "search"
const searchBarSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        // in case of startSearch, put the payload into the state
        startSearch: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})

export const { startSearch } = searchBarSlice.actions;
export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchBarSlice.reducer;