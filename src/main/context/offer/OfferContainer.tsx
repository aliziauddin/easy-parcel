import React, { useState } from "react"
import { OfferAttributes } from "../../offer/OfferModel"
import { OfferProvider } from "./OfferContext"

interface OfferChildrenProps {
  children: React.ReactNode
}
const OfferContainer: React.FC<OfferChildrenProps> = ({ children }) => {
  const [offers, setOffers] = useState<OfferAttributes[]>([])

  const getOffers = async (): Promise<OfferAttributes[]> => {
    if (!offers.length) {
      const response = await fetch("../../data/offer.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })

      const OfferRes = await response.json()
      setOffers(OfferRes)
      return OfferRes
    }
    return offers
  }

  const addOffer = (offer: OfferAttributes) => {
    const newId = (offers.length + 1).toString()
    const newOffer = { ...offer, id: newId }
    setOffers([...offers, newOffer])
  }

  const getOffersById = async (itemId: string): Promise<OfferAttributes[]> => {
    let offersData = offers
    if (!offersData.length) offersData = await getOffers()

    return offersData.filter((offer) => offer.itemId === itemId)
  }
  const getOfferIndex = (id: string) => {
    return offers.findIndex((item) => item.id === id)
  }

  const editOffer = (offer: OfferAttributes) => {
    const offerIndex = getOfferIndex(offer.id)
    const copiedItems = JSON.parse(JSON.stringify(offers))
    if (offerIndex >= 0) {
      copiedItems[offerIndex] = { ...offer }
      setOffers(copiedItems)
      return
    }
  }
  const removeOffer = (id: string) => {
    const offerIndex = getOfferIndex(id)
    if (offerIndex >= 0) {
      const copiedOffers = JSON.parse(JSON.stringify(offers))
      copiedOffers.splice(offerIndex, 1)
      setOffers([...copiedOffers])
    }
  }

  return (
    <OfferProvider
      value={{
        offers,
        addOffer,
        getOffers,
        editOffer,
        removeOffer,
        getOffersById
      }}
    >
      {children}
    </OfferProvider>
  )
}

export default OfferContainer
