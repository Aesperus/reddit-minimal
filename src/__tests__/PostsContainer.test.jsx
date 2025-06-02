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
                data: [
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    }
                ]
            }
        }
        const mockStore = setupStore(mockState);

        render(
            <Provider store={mockStore}>
                <PostsContainer />
            </Provider>
        )

        const posts = mockStore.getState().posts.data;
        const renderedItems = screen.getAllByRole("heading", {name: "Post Title"});
        expect(renderedItems.length).toBe(posts.length);

    })
    it("renders a message if no posts match the search term", () => {
        const mockState = {
            search: {
                searchTerm: '123'
            },
            posts: {
                data: [
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    }
                ]
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

    it("displays a Loading message while the app is waiting for the API to return", () => {
        const mockState = {
            search: {
                searchTerm: '123'
            },
            posts: {
                data: [
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    }
                ],
                isLoading: true,
            }
        }
        const mockStore = setupStore(mockState);

        render(
            <Provider store={mockStore}>
                <PostsContainer />
            </Provider>
        )

        expect(screen.getByText("Loading Posts...")).toBeInTheDocument();
    })

    it("displays an error message if the API returns an error", () => {
        const mockState = {
            search: {
                searchTerm: '123'
            },
            posts: {
                data: [
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    },
                    {
                        data: {
                            title: "test title",
                            author: "test author",
                            url: "test-url.jpeg",
                            permalink: "testPermalink",
                            num_comments: 10,
                            thumbnail: "notSelf",
                            media: null,
                            subreddit: "testSubreddit",
                            is_video: true,
                        }
                    }
                ],
                isLoading: false,
                error: true,
            }
        }
        const mockStore = setupStore(mockState);

        render(
            <Provider store={mockStore}>
                <PostsContainer />
            </Provider>
        )

        expect(screen.getByText("Error Loading Posts. Please reload the page.")).toBeInTheDocument();
    })
})