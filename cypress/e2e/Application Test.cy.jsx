describe ("Reddit Minimal", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("displays a list of popular posts", () => {
        cy.get(`[aria-label="Post Title"]`).should("have.length", 25);
    })

    it("displays a list of popular subreddits", () => {
        cy.get(`li[aria-label="Subreddit"]`).should("have.length", 25);
    })

    it("filters displayed posts by search term", () => {
        cy.get(`[aria-label="Search"]`).type("test12345{enter}");
        cy.get(`[aria-label="Post Title"]`).should("have.length.lessThan", 25);
    })

    it("loads posts from different subreddits when the subreddit is clicked", () => {
        let subreddit;
        cy.get(`li[aria-label="Subreddit"]`).first()
            .then((el) => {
                subreddit = el.text();
            })
        cy.then(() => {
            cy.get(`li[aria-label="Subreddit"]`).first().click();
            cy.get(`p[aria-label="Subreddit"]`).should("contain.text", `r/${subreddit}`);
        })
    })
})