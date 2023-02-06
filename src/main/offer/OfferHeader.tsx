import { useState, useContext } from "react"
import { Typography, Grid, Button } from "@mui/material"
import { OfferHeaderProps } from "../../@types/OfferHeader"
import OfferContext from "../context/offer/OfferContext"
import { OfferContextType } from "../../@types/OfferContextType"
import { OfferAttributes } from "./OfferModel"
import SimpleDialog from "../common/SimpleDialog"

const OfferHeader: React.FC<OfferHeaderProps> = ({ itemTitle, itemId }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const { addOffer } = useContext(OfferContext) as OfferContextType

  const closeDialog = () => setOpenDialog(false)
  const handleSave = (offer: OfferAttributes) => {
    setOpenDialog(!openDialog)
    if (itemId) addOffer({ ...offer, itemId })
  }
  const handleOpenDialog = () => setOpenDialog(!openDialog)

  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="space-between"
    >
      <Grid item xs={6}>
        <Typography variant="h6">
          Offer ▸ {itemTitle ? `${itemTitle}` : "All"}
        </Typography>
      </Grid>
      {itemTitle ? (
        <Grid container item xs={6} justifyContent="flex-end">
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={handleOpenDialog}
            >
              Create new offer
            </Button>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
      {openDialog ? (
        <SimpleDialog
          title="Add Voucher"
          buttonTitle="Add"
          openDialog={openDialog}
          closeDialog={closeDialog}
          handleSave={handleSave}
        />
      ) : (
        <></>
      )}
    </Grid>
  )
}

export default OfferHeader
