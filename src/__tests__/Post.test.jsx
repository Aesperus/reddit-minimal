import React from 'react';
import Post from '../components/Post/Post.jsx';
import {renderWithProviders} from "./tests-utils.jsx";
import {screen} from "@testing-library/react";

describe("Post", () => {
    it("renders correctly without multimedia if multimedia is not present", () => {
        const mockPost = {
            data: {
                title: "test title",
                author: "test author",
                url: "test url",
                permalink: "testPermalink",
                num_comments: 10,
                thumbnail: "self",
                media: null,
                subreddit: "testSubreddit",
                is_video: false,
            }
        }

        renderWithProviders(<Post post={mockPost}/>)

        expect(screen.getByRole("heading", { name: "Post Title"})).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Post Title"})).toHaveTextContent("test title");

        expect(screen.getByRole("paragraph", { name: "Post Author"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", { name: "Post Author"})).toHaveTextContent("test author");

        expect(screen.getByRole("link", { name: "Post Link"})).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Post Link"})).toHaveAttribute("href", "https://www.reddit.com/testPermalink");
        expect(screen.getByRole("link", { name: "Post Link"})).toHaveAttribute("target", "_blank");

        expect(screen.getByRole("paragraph", { name: "Number of Post Comments"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", { name: "Number of Post Comments"})).toHaveTextContent("comments: 10");

        expect(screen.getByRole("paragraph", { name: "Subreddit"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", { name: "Subreddit"})).toHaveTextContent("r/testSubreddit");
    })
    it("renders an image if the post body includes an image", () => {
        const mockPost = {
            data: {
                title: "test title",
                author: "test author",
                url: "test-url.jpeg",
                permalink: "testPermalink",
                num_comments: 10,
                thumbnail: "notSelf",
                media: null,
                subreddit: "testSubreddit",
                is_video: false,
            }
        }

        renderWithProviders(<Post post={mockPost}/>)

        expect(screen.getByRole("img", {name: "Post Image"})).toBeInTheDocument();
    })

    it("renders an image if the post body includes an image", () => {
        const mockPost = {
            data: {
                title: "test title",
                author: "test author",
                url: "test-url.jpeg",
                permalink: "testPermalink",
                num_comments: 10,
                thumbnail: "notSelf",
                media: null,
                subreddit: "testSubreddit",
                is_video: false,
            }
        }

        renderWithProviders(<Post post={mockPost}/>)

        expect(screen.getByRole("img")).toBeInTheDocument();
    })

    it("renders a vide if the post body contains a video", () => {
        const mockPost = {
            data: {
                title: "test title",
                author: "test author",
                url: "test-url.jpeg",
                permalink: "testPermalink",
                num_comments: 10,
                thumbnail: "notSelf",
                media: {
                    "reddit_video": {
                        "fallback_url": "https://v.redd.it/test-url/DASH_720.mp4",
                    }
                },
                subreddit: "testSubreddit",
                is_video: true,
            }
        }

        renderWithProviders(<Post post={mockPost}/>)

        expect(screen.getByLabelText("Post Video")).toBeInTheDocument();
    })
})