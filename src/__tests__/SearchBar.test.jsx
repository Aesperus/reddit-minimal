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

        const logo = screen.getByRole("image", { name: "Logo Image" });
        const appTitle = screen.getByRole("heading");
        const inputField = screen.getByRole("textbox");
        const searchButton = screen.getByRole("button");

        const renderedItems = [logo, appTitle, inputField, searchButton];
        renderedItems.forEach(item => expect(item).toBeInTheDocument());
    });

    it("navigates to Reddit when the logo is clicked", () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        const logo = screen.getByRole("link");
        expect(logo).toHaveAttribute("href", "https://www.reddit.com/");
    });

    it("informs the store when the user enters a search term and clicks the search button", async () => {
        const user = userEvent.setup();

        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        const searchTerm = screen.getByRole("textbox");
        searchTerm.value = "test";
        await user.click(screen.getByRole("button"));
        expect(store.getState().search.searchTerm).toEqual("test");
    })
});