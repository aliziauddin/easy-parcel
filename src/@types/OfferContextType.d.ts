import { OfferAttributes } from "../main/offer/OfferModel"

export type OfferContextType = {
  offers: OfferAttributes[]
  addOffer: (offer: OfferAttributes) => void
  editOffer: (offer: OfferAttributes) => void
  getOffers: () => Promise<OfferAttributes[]>
  removeOffer: (id: string) => void
  getOffersById: (id: string) => Promise<OfferAttributes[]>
}
