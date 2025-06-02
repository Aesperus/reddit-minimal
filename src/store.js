import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './components/SearchBar/searchBarSlice';
import postsContainerReducer from './components/PostsContainer/postsContainerSlice';

const rootReducer = combineReducers({
    search: searchBarReducer,
    posts: postsContainerReducer,
});

// create the store with reducers from the slices
export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}