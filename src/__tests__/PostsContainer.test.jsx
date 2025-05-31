// import React from 'react';
// import PostsContainer from '../components/PostsContainer/PostsContainer.jsx';
// import {Provider, useSelector} from "react-redux";
// import {render, screen} from "@testing-library/react";
// import {store} from "../store.js";
//
// describe("PostsContainer", () => {
//     it("renders a message when there are no posts matching the search term", () => {
//         render(
//             <Provider store={store}>
//                 <PostsContainer />
//             </Provider>
//         )
//
//         expect(store.getState().search.searchTerm).toBe("");
//         expect(screen.getByText("No posts match your search term.")).toBeInTheDocument();
//     })
// })