import { selectFoundPosts } from '../components/PostsContainer/postsContainerSlice';

describe("selectFoundPosts", () => {
    it("returns all posts if search term is empty", () => {
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

        const result = selectFoundPosts(mockState);
        expect(result.length).toBe(mockState.posts.data.children.length);
    })

    it("returns posts that match the search term", () => {
        const mockState = {
            search: {
                searchTerm: '2'
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

        const result = selectFoundPosts(mockState);
        expect(result.length).toBe(1);
        expect(result[0].data.title).toBe('test title 2');
    })
})