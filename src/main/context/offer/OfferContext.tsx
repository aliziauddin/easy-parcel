import * as React from "react"
import { OfferContextType } from "../../../@types/OfferContextType"

export const OfferContext = React.createContext<OfferContextType | null>(null)

export const OfferProvider = OfferContext.Provider

export default OfferContext
