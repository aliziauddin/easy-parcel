import {
  InventoryAddAttributes,
  InventoryAttributes
} from "../main/inventory/InventoryModel"

export type InventoryContextType = {
  inventoryItems: InventoryAttributes[]
  addInventoryItem: ({
    inventoryItem
  }: {
    inventoryItem: InventoryAddAttributes
  }) => void
  getInventoryItems: () => Promise<InventoryAttributes[]>
  getItemById: (id: string) => Promise<InventoryAttributes | undefined>
  editItem: (item: InventoryAttributes) => void
  updateInventoryToZero: (id: string) => void
}
