import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store.js";

describe("App", () => {
    it("renders test heading", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
    });
});