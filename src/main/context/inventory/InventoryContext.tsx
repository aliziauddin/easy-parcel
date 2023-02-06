import * as React from "react"
import { InventoryContextType } from "../../../@types/InventoryContextType"

export const InventoryContext =
  React.createContext<InventoryContextType | null>(null)

export const InventoryProvider = InventoryContext.Provider

export default InventoryContext
