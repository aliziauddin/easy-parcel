import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { InventoryContextType } from "../../@types/InventoryContextType"
import { OfferContextType } from "../../@types/OfferContextType"
import InventoryContext from "../context/inventory/InventoryContext"
import OfferContext from "../context/offer/OfferContext"
import { InventoryAttributes } from "../inventory/InventoryModel"
import OfferHeader from "./OfferHeader"
import { OfferAttributes } from "./OfferModel"
import OfferTable from "./OfferTable"

const Offer = () => {
  const [offersData, setOffers] = useState<OfferAttributes[]>([])
  const [item, setItem] = useState<InventoryAttributes | null>(null)
  const [searchParams] = useSearchParams()
  const itemId = searchParams.get("id")
  const { offers, getOffers, getOffersById } = useContext(
    OfferContext
  ) as OfferContextType
  const { getItemById } = useContext(InventoryContext) as InventoryContextType

  useEffect(() => {
    getOffersData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId, offers])

  const getItem = async () => {
    let itemData: InventoryAttributes | undefined
    if (itemId) itemData = await getItemById(itemId)
    if (itemData) setItem(itemData)
  }
  const getOffersData = async () => {
    let offerData: OfferAttributes[] = []
    if (itemId) {
      offerData = await getOffersById(itemId)
      await getItem()
    } else offerData = await getOffers()
    setOffers(offerData)
  }

  return (
    <>
      <OfferHeader itemTitle={item?.title} itemId={itemId} />
      <OfferTable offers={offersData} />
    </>
  )
}

export default Offer
