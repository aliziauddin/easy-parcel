import { Typography, Grid, Button } from "@mui/material"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { InventoryContextType } from "../../@types/InventoryContextType"
import InventoryContext from "../context/inventory/InventoryContext"
import InventoryForm from "./InventoryForm"
import { InventoryAddAttributes } from "./InventoryModel"

const styles = () => ({
  inputGrid: { marginTop: 4 }
})
const AddInventory: React.FC = () => {
  const classes = styles()
  const navigate = useNavigate()
  const inventoryContext = useContext(InventoryContext) as InventoryContextType
  const [item, setItem] = useState<InventoryAddAttributes>({
    title: "",
    price: "",
    quantity: ""
  })
  const handleItemChange = ({
    event,
    label
  }: {
    event: React.ChangeEvent<HTMLInputElement>
    label: string
  }): void => {
    const newVal: InventoryAddAttributes = { ...item }
    const value = event.target.value
    newVal[label as keyof InventoryAddAttributes] = value

    setItem({ ...newVal })
  }

  const saveItem = (): void => {
    if (item.title === "" || item.price === "" || item.quantity === "")
      console.log("error")
    else {
      const itemToSave = { ...item }
      itemToSave.price = `$${parseFloat(itemToSave.price).toFixed(2)}`
      inventoryContext.addInventoryItem({ inventoryItem: itemToSave })
      navigate("/inventory")
    }
  }
  return (
    <>
      <Typography variant="h6">Add Item</Typography>

      <Grid sx={classes.inputGrid}>
        <InventoryForm
          isAdd={true}
          handleItemChange={handleItemChange}
          item={item}
        />
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={classes.inputGrid}
      >
        <Grid container item xs={4}>
          <Grid item xs={4}>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => navigate("/inventory")}
            >
              Cancel
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button
              color="primary"
              variant="contained"
              onClick={saveItem}
              data-testid="saveButton"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AddInventory
