const { render } = require("@testing-library/react")
const { default: NotesList } = require(".")

describe("Notes list", () => {
  it("renders 'hola'", () => {
    const component = render(<NotesList />)

    expect(component).toHaveTextContent("hola")
  })
})
