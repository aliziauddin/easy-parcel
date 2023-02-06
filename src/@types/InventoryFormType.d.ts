import { InventoryAddAttributes } from "../main/inventory/InventoryModel"

export type InventoryFormProps = {
  handleItemChange: ({
    event,
    label
  }: {
    event: React.ChangeEvent<HTMLInputElement>
    label: string
  }) => void
  item: InventoryAddAttributes
  isAdd?: boolean = false
}
