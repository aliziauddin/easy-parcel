export type OfferAttributes = {
  id: string
  name: string
  description: string
  itemId: string
  priceReduction: string
  quantityThreshold: string
}

export const emptyOffer = Object.freeze({
  id: "",
  name: "",
  description: "",
  itemId: "",
  priceReduction: "0",
  quantityThreshold: "0"
})
// export type InventoryAddAttributes = {
//   title: string
//   price: string
//   quantity: string
// }
