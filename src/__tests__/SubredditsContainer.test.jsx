import SubredditsContainer from "../components/SubredditsContainer/SubredditsContainer.jsx";
import {screen, within} from "@testing-library/react";
import {renderWithProviders} from "./tests-utils.jsx";

describe("SubredditsContainer", () => {
    it('displays a list of subreddits', () => {
        renderWithProviders(<SubredditsContainer/>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent("Subreddits");
        expect(screen.getByRole('list')).toBeInTheDocument();
        const { getAllByRole } = within(screen.getByRole('list'));
        const items = getAllByRole('listitem');
        expect(items.length).toBe(2);
    })
});