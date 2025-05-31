import {createSlice} from "@reduxjs/toolkit";

// mock data
const mockAPIResponse = {
    data: {
        children: [
            {
                data: {
                    title: "test title",
                    author: "test author",
                    url: "test url",
                    permalink: "test permalink",
                    num_comments: 10,
                }
            },
            {
                data: {
                    title: "test title 2",
                    author: "test author 2",
                    url: "test url 2",
                    permalink: "test permalink 2",
                    num_comments: 20,
                }
            },
            {
                data: {
                    title: "test title 3",
                    author: "test author 3",
                    url: "test url 3",
                    permalink: "test permalink 3",
                    num_comments: 30,
                }
            }
        ]
    }
}

// posts container slice
const postsContainerSlice = createSlice({
    name: "posts",
    initialState: mockAPIResponse,
    reducers: {

    }
})

// use the search term in state to filter the posts in state
// if the search term is empty, return all posts
export const selectFoundPosts = (state) => {
    if(state.search.searchTerm === "") return (
        state.posts.data.children
    )
    return state.posts.data.children.filter(post => post.data.title.toLowerCase().includes(state.search.searchTerm.toLowerCase()));
}

export default postsContainerSlice.reducer;