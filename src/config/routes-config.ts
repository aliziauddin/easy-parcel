import AddInventory from "../main/inventory/AddInventory"
import EditInventory from "../main/inventory/EditInventory"
import Inventory from "../main/inventory/Inventory"
import Offer from "../main/offer/Offer"

export const routes = [
  {
    key: "inventory",
    title: "Inventory",
    route: "/",
    component: Inventory
  },
  {
    key: "inventory",
    title: "Inventory",
    route: "/inventory",
    component: Inventory
  },
  {
    key: "offer",
    title: "Offer",
    route: "/offer",
    component: Offer
  },
  {
    key: "add-item",
    title: "Add Item",
    route: "/inventory/add-item",
    component: AddInventory
  },
  {
    key: "edit-item",
    title: "Edit Item",
    route: "/inventory/edit-item",
    component: EditInventory
  }
]
