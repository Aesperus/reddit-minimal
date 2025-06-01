// noinspection JSCheckFunctionSignatures

import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from "react-redux";
import { store } from "../store";

describe("SearchBar", () => {
    it("renders correctly", () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        // get all expected rendered items
        const logo = screen.getByRole("image", { name: "Logo Image" });
        // noinspection JSCheckFunctionSignatures
        const appTitle = screen.getByRole("heading");
        const inputField = screen.getByRole("textbox");
        const searchButton = screen.getByRole("button");
        const renderedItems = [logo, appTitle, inputField, searchButton];

        // check that all expected items are rendered
        renderedItems.forEach(item => expect(item).toBeInTheDocument());
    });

    it("navigates to Reddit when the logo is clicked and open the page in a new tab", () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        // get the logo
        const logo = screen.getByRole("link");

        // expect the logo to be a link to Reddit and open the page in a new tab
        expect(logo).toHaveAttribute("href", "https://www.reddit.com/");
        expect(logo).toHaveAttribute("target", "_blank");
    });

    it("submits the search term when the user presses the enter key", async () => {
        // define user events and add a spy on dispatch
        const user = userEvent.setup();
        vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        // get the search field, enter a search term, focus the field and press Enter
        const searchTerm = screen.getByRole("textbox");
        searchTerm.value = "testEnter";
        searchTerm.focus();
        await user.keyboard("{enter}");

        // expect the search term to be dispatched to the store
        expect(store.dispatch).toHaveBeenCalledWith({ type: "search/startSearch", payload: "testEnter" });

        // reset the search term
        searchTerm.value = "";
    })

    it("informs the store when the user enters a search term and clicks the search button", async () => {
        // define user events and add a spy on dispatch
        const user = userEvent.setup();
        vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        // get the search field, enter a search term and click the search button
        const searchTerm = screen.getByRole("textbox");
        searchTerm.value = "test";
        await user.click(screen.getByRole("button"));

        // expect the search term to be dispatched to the store
        expect(store.dispatch).toHaveBeenCalledWith({ type: "search/startSearch", payload: "test" });
    });

    it("does not dispatch an action when the search term has not changed", async () => {
        // define user events and add a spy on dispatch
        const user = userEvent.setup();
        vi.spyOn(store, "dispatch");

        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        // get the search field, enter a search term and click the search button twice
        const searchTerm = screen.getByRole("textbox");
        searchTerm.value = "testSameTerm";
        await user.click(screen.getByRole("button"));
        await user.click(screen.getByRole("button"));

        // expect the search term to be dispatched to the store only once
        expect(store.dispatch).toHaveBeenCalledWith({type: "search/startSearch", payload: "testSameTerm"});
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
});