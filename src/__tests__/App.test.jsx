import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store.js";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

describe("App", () => {
    it("renders test heading", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    });
});