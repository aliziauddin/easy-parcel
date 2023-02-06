import { useEffect, useContext } from "react"

import InventoryTable from "./InventoryTable"
import InventoryHeader from "./InventoryHeader"
import InventoryContext from "../context/inventory/InventoryContext"
import { InventoryContextType } from "../../@types/InventoryContextType"

const Inventory = () => {
  const { inventoryItems, getInventoryItems } = useContext(
    InventoryContext
  ) as InventoryContextType

  useEffect(() => {
    getInventoryItems()
  }, [getInventoryItems])

  return (
    <>
      <InventoryHeader />
      <InventoryTable inventoryItems={inventoryItems} />
    </>
  )
}

export default Inventory
