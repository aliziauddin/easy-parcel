import { Typography, Grid, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const InventoryHeader = () => {
  const navigate = useNavigate()

  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="space-between"
    >
      <Grid item xs={6}>
        <Typography variant="h6" data-testid="inventoryTitle">
          Inventory
        </Typography>
      </Grid>
      <Grid container item xs={6} justifyContent="flex-end">
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate("/inventory/add-item")}
            data-testid="addButton"
          >
            Add new item
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InventoryHeader
