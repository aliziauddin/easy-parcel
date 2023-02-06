import React, { useState } from "react"
import {
  InventoryAddAttributes,
  InventoryAttributes
} from "../../inventory/InventoryModel"
import { InventoryProvider } from "./InventoryContext"

interface InventoryChildrenProps {
  children: React.ReactNode
}
const InventoryContainer: React.FC<InventoryChildrenProps> = ({ children }) => {
  const [inventoryItems, setInventoryItems] = useState<InventoryAttributes[]>(
    []
  )

  const addInventoryItem = ({
    inventoryItem
  }: {
    inventoryItem: InventoryAddAttributes
  }) => {
    const newId = (inventoryItems.length + 1).toString()
    const newItem = { id: newId, ...inventoryItem }
    setInventoryItems([...inventoryItems, newItem])
  }

  const getInventoryItems = async (): Promise<InventoryAttributes[]> => {
    if (!inventoryItems.length) {
      const response = await fetch("../../data/inventory.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })

      const inventoryRes = await response.json()
      setInventoryItems(inventoryRes)
      return inventoryRes
    }
    return inventoryItems
  }

  const getItemIndex = (id: string) => {
    return inventoryItems.findIndex((item) => item.id === id)
  }

  const getItemById = async (
    id: string
  ): Promise<InventoryAttributes | undefined> => {
    let itemData = [...inventoryItems]
    if (!itemData) itemData = await getInventoryItems()
    return itemData.find((item) => item.id === id)
  }

  const editItem = (item: InventoryAttributes) => {
    const itemIndex = getItemIndex(item.id)
    const copiedItems = JSON.parse(JSON.stringify(inventoryItems))
    if (itemIndex >= 0) {
      copiedItems[itemIndex] = { ...item }
      setInventoryItems(copiedItems)
      return
    }
  }

  const updateInventoryToZero = (id: string) => {
    const itemIndex = getItemIndex(id)
    const copiedItems = JSON.parse(JSON.stringify(inventoryItems))
    if (itemIndex >= 0) {
      copiedItems[itemIndex].quantity = "0"
      setInventoryItems(copiedItems)
      return
    }
  }

  return (
    <InventoryProvider
      value={{
        inventoryItems,
        addInventoryItem,
        getInventoryItems,
        getItemById,
        editItem,
        updateInventoryToZero
      }}
    >
      {children}
    </InventoryProvider>
  )
}

export default InventoryContainer
