import React from "react"
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen
} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Inventory from "./Inventory"
import InventoryContainer from "../context/inventory/InventoryContainer"
import AddInventory from "./AddInventory"
const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}))

const TEST_IDS = {
  titleInputId: "titleInput",
  priceInputId: "priceInput",
  quantityInputId: "quantityInput",
  saveButtonId: "saveButton",
  listId: "inventoryRowItems",
  addButtonId: "addButton"
}

describe("Favorite Movie Directory", () => {
  //   let getByTestId: HTMLElement
  //   let queryByTestId: HTMLElement
  let titleInput: HTMLElement
  let priceInput: HTMLElement
  let quantityInput: HTMLElement
  let saveButton: HTMLElement
  let addButton: HTMLElement
  let list: HTMLElement
  //   let queryList
  //   let search
  //   let getAlert
  //   let queryAlert
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <InventoryContainer>
        <Inventory />
      </InventoryContainer>
    )
    addButton = screen.getByTestId(TEST_IDS.addButtonId)
    // titleInput = screen.getByTestId(TEST_IDS.titleInputId)
    // priceInput = screen.getByTestId(TEST_IDS.priceInputId)
    // quantityInput = screen.getByTestId(TEST_IDS.quantityInputId)
    // saveButton = screen.getByTestId(TEST_IDS.saveButtonId)
  })
  afterEach(() => {
    cleanup()
  })
  const addInventory = ({
    title,
    price,
    quantity
  }: {
    title: string
    price: string
    quantity: string
  }) => {
    fireEvent.click(saveButton, { button: "0" })
    // fireEvent.change(titleInput, { target: { value: title } })
    // fireEvent.change(priceInput, { target: { value: price } })
    // fireEvent.change(quantityInput, { target: { value: quantity } })
    // fireEvent.click(saveButton, { button: "0" })
  }
  //   const addInventorySet = () => {
  //     addInventory({ title: "Item1", price: "90", quantity: "2" })
  //     addInventory({
  //       title: "Item2",
  //       price: "100",
  //       quantity: "4"
  //     })
  //   }

  //   it("should add a row with valid data and not show the no result message", async () => {
  //     addInventory({ title: "Item3", price: "100", quantity: "3" })
  //     const list = getByTestId(TEST_IDS.listId)
  //     await waitFor(() => {
  //       expect(list.children[0].textContent).toEqual(
  //         "Star WarsRatings: 95/1003 Hrs"
  //       )
  //       expect(queryNoResult).toBeNull()
  //     })
  //   })
  it("should add a row with valid data and not show the no result message", async () => {
    // addMovie("Star Wars", "95", "3h")
    render(<AddInventory />)
    console.log(screen.getByTestId(TEST_IDS.titleInputId))
    titleInput = screen.getByTestId(TEST_IDS.titleInputId)

    priceInput = screen.getByTestId(TEST_IDS.priceInputId)
    quantityInput = screen.getByTestId(TEST_IDS.quantityInputId)
    fireEvent.change(titleInput, { target: { value: "test1" } })
    fireEvent.change(priceInput, { target: { value: "100" } })
    fireEvent.change(quantityInput, { target: { value: "2" } })
    fireEvent.click(saveButton, { button: "0" })
    list = screen.getByTestId(TEST_IDS.listId)

    await waitFor(() => {
      screen.getByTestId(TEST_IDS.titleInputId)
      // eslint-disable-next-line testing-library/no-node-access
      expect(list.children[0].textContent).toEqual(
        "Star WarsRatings: 95/1003 Hrs"
      )
    })
  })
})
