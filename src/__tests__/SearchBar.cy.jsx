import SearchBar from "../components/SearchBar/SearchBar.jsx";
import {Provider} from "react-redux";
import {store} from "../store.js";

describe ('SearchBar', () => {
    it("renders all of its elements correctly", () => {
        cy.mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        cy.get('[aria-label="Logo Image"]').should("be.visible");
        cy.get('[role="heading"]').should("be.visible");
        cy.get('[aria-label="Search"]').should("be.visible");
        cy.get('[aria-label="Search Button"]').should("be.visible");
        cy.get('[aria-label="Search Icon"]').should("be.visible");
    })

    it("redirects to Reddit when the logo is clicked", () => {
        cy.mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        cy.get('[aria-label="Reddit Logo"]')
            .should("have.attr", "href", "https://www.reddit.com/")
            .then(link => {
                cy.request(link.prop("href"))
                    .its ("status")
                    .should("eq", 200);
            });
    });

    it("should dispatch the search term to the store when the search button is clicked", () => {
        cy.mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        const spy = cy.spy(store, "dispatch");

        cy.get('[aria-label="Search"]').type("test");
        cy.get('[aria-label="Search Button"]').as("searchButton").click().then(() => {
            expect(spy).to.be.calledWith({ type: "search/startSearch", payload: "test" });
        });
    })

    it("should dispatch the search term to the store if the user hits the Enter key", () => {
        cy.mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        const spy = cy.spy(store, "dispatch");

        cy.get('[aria-label="Search"]').type("testEnter{enter}").then(() => {
            expect(spy).to.be.calledWith({ type: "search/startSearch", payload: "testEnter" });
        });
    })

    it("should not dispatch the search term to the store if the search term has not changed", () => {
        cy.mount(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        )

        const spy = cy.spy(store, "dispatch");

        cy.get('[aria-label="Search"]').type("testDoubleClick{enter}{enter}").then(() => {
            expect(spy).to.be.calledWith({ type: "search/startSearch", payload: "testDoubleClick" }).and.calledOnce;
        });
    })
})