import { selectFoundPosts } from '../components/PostsContainer/postsContainerSlice';

describe("selectFoundPosts", () => {
    it("returns all posts if search term is empty", () => {
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
                            title: "test title 2",
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

        const result = selectFoundPosts(mockState);
        expect(result.length).toBe(mockState.posts.data.length);
    })

    it("returns posts that match the search term", () => {
        const mockState = {
            search: {
                searchTerm: 'test title 2'
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
                            title: "test title 2",
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

        const result = selectFoundPosts(mockState);
        expect(result.length).toBe(1);
        expect(result[0].data.title).toBe('test title 2');
    })

    it("")
})