import { configureStore } from '@reduxjs/toolkit';
import searchBarReducer from './components/SearchBar/searchBarSlice';

export const store =  configureStore({
    reducer: {
        search: searchBarReducer
    }
});