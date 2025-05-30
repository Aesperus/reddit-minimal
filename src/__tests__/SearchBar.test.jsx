import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import { render, screen } from '@testing-library/react';

describe("SearchBar", () => {
    it("renders correctly", () => {
        render(<SearchBar />);

        const logo = screen.getByAltText("Reddit Minimal Logo");
        const appTitle = screen.getByText("Reddit Minimal");
        const inputField = screen.getByPlaceholderText("Search");
        const searchButton = screen.getByAltText("Search Icon");

        const renderedItems = [ logo, appTitle, inputField, searchButton];
        renderedItems.forEach(item => expect(item).toBeInTheDocument());
    });
});