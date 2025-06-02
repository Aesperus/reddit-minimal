import React from 'react';
import Post from '../components/Post/Post.jsx';
import {renderWithProviders} from "./tests-utils.jsx";
import {screen} from "@testing-library/react";

describe("Post", () => {
    it("renders correctly", () => {
        const mockPost = {
            data: {
                title: "test title",
                author: "test author",
                url: "test url",
                permalink: "test permalink",
                num_comments: 10,
                thumbnail: "test thumbnail",
                created_utc: 1646300800,
                score: 100
            }
        }

        renderWithProviders(<Post post={mockPost}/>)
        expect(screen.getByText("test title")).toBeInTheDocument();
        expect(screen.getByText("by test author")).toBeInTheDocument();
        expect(screen.getByText("test permalink")).toBeInTheDocument();
        expect(screen.getByText("comments: 10")).toBeInTheDocument();
    })
})