import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isLoading: true,
    error: false,
    loadedSubreddit: "",
}

export const fetchSubreddits = createAsyncThunk(
    "subreddits/fetchSubreddits",
    async () => {
        const response = await fetch("https://www.reddit.com/subreddits.json");
        const data = await response.json();
        if (!response.ok) {
            alert("Error fetching subreddits. Status: " + response.status);
        }
        return data;
    }
)

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        loadSubreddit: (state, action) => {
            state.loadedSubreddit = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data.children;
        });
        builder.addCase(fetchSubreddits.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSubreddits.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export const selectSubreddits = (state) => state.subreddits.data;
export const { loadSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;