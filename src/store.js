import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './components/SearchBar/searchBarSlice';
import postsContainerReducer from './components/PostsContainer/postsContainerSlice';

// create the store with reducers from the slices
export const store =  configureStore({
    reducer: {
        search: searchBarReducer,
        posts: postsContainerReducer,
    }
});