import { useState, useContext } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip
} from "@mui/material"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { emptyOffer, OfferAttributes } from "./OfferModel"
import SimpleDialog from "../common/SimpleDialog"
import { OfferContextType } from "../../@types/OfferContextType"
import OfferContext from "../context/offer/OfferContext"

const styles = () => ({
  table: { minWidth: 650 },
  tableRow: { "&:last-child td, &:last-child th": { border: 0 } }
})

const OfferTable = ({ offers }: { offers: OfferAttributes[] }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [selectedOffer, setSelectedOffer] =
    useState<OfferAttributes>(emptyOffer)
  const { editOffer, removeOffer } = useContext(
    OfferContext
  ) as OfferContextType
  const classes = styles()

  const closeDialog = () => setOpenDialog(false)
  const handleSave = (offer: OfferAttributes) => {
    setOpenDialog(!openDialog)
    editOffer(offer)
  }
  const handleOpenDialog = (offer: OfferAttributes) => {
    setOpenDialog(!openDialog)
    setSelectedOffer(offer)
  }
  return (
    <>
      <TableContainer>
        <Table sx={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Price Reduction</TableCell>
              <TableCell align="left">Quantity Threshold</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer: OfferAttributes, index: number) => (
              <TableRow
                key={offer.name + index}
                sx={classes.tableRow}
                data-testid="inventoryRowItems"
              >
                <TableCell align="left">{offer.name}</TableCell>
                <TableCell align="left">{offer.description}</TableCell>
                <TableCell align="left">{offer.priceReduction}</TableCell>
                <TableCell align="left">{offer.quantityThreshold}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit Item">
                    <IconButton
                      component="label"
                      onClick={() => handleOpenDialog(offer)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Offer">
                    <IconButton
                      component="label"
                      onClick={() => removeOffer(offer.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {openDialog ? (
        <SimpleDialog
          title="Edit Voucher"
          buttonTitle="Edit"
          openDialog={openDialog}
          offer={selectedOffer}
          closeDialog={closeDialog}
          handleSave={handleSave}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default OfferTable
