import { render, waitFor, screen, within } from "@testing-library/react"
import InventoryHeader from "./InventoryHeader"

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}))

describe("Inventory Header", () => {
  it("renders inventory header", () => {
    render(<InventoryHeader />)

    const { getByText } = within(screen.getByTestId("inventoryTitle"))
    expect(getByText("Inventory")).toBeInTheDocument()
  })
})
