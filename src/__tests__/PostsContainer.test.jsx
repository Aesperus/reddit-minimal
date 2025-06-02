import React from 'react';
import PostsContainer from '../components/PostsContainer/PostsContainer.jsx';
import {Provider} from "react-redux";
import {render, screen} from "@testing-library/react";
import {setupStore} from "../store.js";

describe("PostsContainer", () => {


    it("renders all posts from state if there are any", () => {
        const mockState = {
            search: {
                searchTerm: ''
            },
            posts: {
                data: {
                    children: [
                        {
                            data: {
                                title: 'test title',
                                author: 'test author',
                                url: 'test url',
                                permalink: 'test permalink',
                                num_comments: 10
                            }
                        },
                        {
                            data: {
                                title: 'test title 2',
                                author: 'test author 2',
                                url: 'test url 2',
                                permalink: 'test permalink 2',
                                num_comments: 20
                            }
                        },
                        {
                            data: {
                                title: 'test title 3',
                                author: 'test author 3',
                                url: 'test url 3',
                                permalink: 'test permalink 3',
                                num_comments: 30
                            }
                        }
                    ]
                }
            }
        }
        const mockStore = setupStore(mockState);

        render(
            <Provider store={mockStore}>
                <PostsContainer />
            </Provider>
        )

        const posts = mockStore.getState().posts.data.children;
        const renderedItems = screen.getAllByRole("heading", {name: "Post Title"});
        expect(renderedItems.length).toBe(posts.length);

    })
    it("renders a message if no posts match the search term", () => {
        const mockState = {
            search: {
                searchTerm: ''
            },
            posts: {
                data: {
                    children: []
                }
            }
        }
        const mockStore = setupStore(mockState);

        render(
            <Provider store={mockStore}>
                <PostsContainer />
            </Provider>
        )

        expect(screen.getByText("No posts match your search term.")).toBeInTheDocument();
    })
})