import { render, waitFor, screen } from "@testing-library/react"
import InventoryTable from "./InventoryTable"

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}))

const inventoryItems = [
  {
    id: "1",
    title: "White Squares",
    quantity: "12",
    price: "$20.00"
  },
  {
    id: "2",
    title: "White Squares",
    quantity: "12",
    price: "$20.00"
  },
  {
    id: "3",
    title: "White Squares",
    quantity: "12",
    price: "$20.00"
  },
  {
    id: "4",
    title: "White Squares",
    quantity: "12",
    price: "$20.00"
  },
  {
    id: "5",
    title: "White Squares",
    quantity: "12",
    price: "$20.00"
  }
]

test("inventory table", async () => {
  render(<InventoryTable inventoryItems={inventoryItems} />)

  const inventoryRows = await waitFor(() =>
    screen.findAllByTestId("inventoryRowItems")
  )
  expect(inventoryRows).toHaveLength(5)
})
