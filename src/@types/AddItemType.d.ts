import { InventoryAttributes } from "../main/inventory/InventoryModel"

export type AddItemProps = {
  addInventoryItem: ({ item }: { item: InventoryAttributes }) => void
}
