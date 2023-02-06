import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { emptyOffer, OfferAttributes } from "../offer/OfferModel"

export type SimpleDialogProps = {
  title: string
  openDialog: boolean
  buttonTitle: string
  offer?: OfferAttributes
  closeDialog: () => void
  handleSave: (Offer: OfferAttributes) => void
}

const SimpleDialog: React.FC<SimpleDialogProps> = ({
  title,
  offer,
  openDialog,
  buttonTitle,
  closeDialog,
  handleSave
}) => {
  const [newOffer, setNewOffer] = useState<OfferAttributes>(offer ?? emptyOffer)

  const handleItemChange = ({
    event,
    label
  }: {
    event: React.ChangeEvent<HTMLInputElement>
    label: string
  }): void => {
    const newVal: OfferAttributes = { ...newOffer }
    const value = event.target.value
    newVal[label as keyof OfferAttributes] = value
    setNewOffer({ ...newVal })
  }

  return (
    <div>
      <Dialog open={openDialog} maxWidth="lg">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={newOffer.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "name" })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={newOffer.description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "description" })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price Reduction"
            type="number"
            fullWidth
            variant="standard"
            value={newOffer.priceReduction}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "priceReduction" })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantity Threshold"
            type="number"
            fullWidth
            variant="standard"
            value={newOffer.quantityThreshold}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "quantityThreshold" })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => handleSave(newOffer)}>{buttonTitle}</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SimpleDialog
