describe ('App', () => {
    it("renders correctly ", () => {
        vi.mock("search", () => ({
            default: () => {
                return <div>Search</div>
            }
        }))


    })
})