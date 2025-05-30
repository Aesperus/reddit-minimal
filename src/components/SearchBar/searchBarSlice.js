import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTerm: "",
}

const searchBarSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        startSearch: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})

export const { startSearch } = searchBarSlice.actions;
export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchBarSlice.reducer;