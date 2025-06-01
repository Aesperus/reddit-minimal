import React from 'react';
import PostsContainer from '../components/PostsContainer/PostsContainer.jsx';
import {Provider, useSelector} from "react-redux";
import {render, screen} from "@testing-library/react";
import {store} from "../store.js";

describe("PostsContainer", () => {


    it("renders all posts from state if there are any", () => {
        render(
            <Provider store={store}>
                <PostsContainer />
            </Provider>
        )

        const posts = store.getState().posts.data.children;
        let renderedItems = [];
        if(posts.length > 0) {
            renderedItems = screen.getAllByRole("heading", {name: "Post Title"});
        } else {
            expect(screen.getByText("No posts match your search term.")).toBeInTheDocument();
        }
        renderedItems.forEach(item => {
            expect(item).toBeInTheDocument();
        })
    })
    it("renders a message if no posts match the search term", () => {
        render(
            <Provider store={store}>
                <PostsContainer />
            </Provider>
        )

        if(store.getState().posts.data.children.length === 0) {
            expect(screen.getByText("No posts match your search term.")).toBeInTheDocument();
        }

    })
})