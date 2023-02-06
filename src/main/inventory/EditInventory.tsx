import { Typography, Grid, Button } from "@mui/material"
import { useState, useContext, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { InventoryContextType } from "../../@types/InventoryContextType"
import InventoryContext from "../context/inventory/InventoryContext"
import InventoryForm from "./InventoryForm"
import { InventoryAttributes } from "./InventoryModel"

const styles = () => ({
  inputGrid: { marginTop: 4 }
})
const EditInventory = () => {
  const classes = styles()
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const itemId = searchParams.get("id")

  const { getItemById, editItem, updateInventoryToZero } = useContext(
    InventoryContext
  ) as InventoryContextType
  const [item, setItem] = useState<InventoryAttributes>({
    id: "",
    title: "",
    price: "",
    quantity: ""
  })

  useEffect(() => {
    if (itemId) updateItem(itemId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItemById, itemId])

  const updateItem = async (itemId: string) => {
    const item = await getItemById(itemId)
    if (item) {
      const price = item?.price
      const parsedPrice = price.split("$")[1]
      setItem({ ...item, price: parsedPrice })
    }
  }

  const handleItemChange = ({
    event,
    label
  }: {
    event: React.ChangeEvent<HTMLInputElement>
    label: string
  }): void => {
    const newVal: InventoryAttributes = { ...item }
    const value = event.target.value
    newVal[label as keyof InventoryAttributes] = value

    setItem({ ...newVal })
  }

  const deleteItem = () => {
    if (itemId) {
      updateInventoryToZero(itemId)
      navigate("/inventory")
    }
  }

  const saveItem = (): void => {
    if (item.title === "" || item.price === "" || item.quantity === "")
      console.log("error")
    else {
      const itemToEdit = { ...item }
      itemToEdit.price = `$${parseFloat(itemToEdit.price).toFixed(2)}`
      editItem(itemToEdit)
      navigate("/inventory")
    }
  }
  return (
    <>
      <Typography variant="h6">Edit Item</Typography>

      <Grid sx={classes.inputGrid}>
        <InventoryForm
          isAdd={false}
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
            <Button color="primary" variant="contained" onClick={saveItem}>
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item xs={4}>
            <Button color="error" variant="outlined" onClick={deleteItem}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default EditInventory
