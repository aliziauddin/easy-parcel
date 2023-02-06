import {
  Grid,
  TextField,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl
} from "@mui/material"
import { InventoryFormProps } from "../../@types/InventoryFormType"

const InventoryForm: React.FC<InventoryFormProps> = ({
  handleItemChange,
  item,
  isAdd = false
}) => {
  const addAsterisk = isAdd ? "*" : ""
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Grid container item xs={4.5} direction="column">
        <Grid item>
          <TextField
            type="text"
            fullWidth
            id="title"
            label={`Title${addAsterisk}`}
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "title" })
            }
            value={item.title}
            data-testid="titleInput"
          />
        </Grid>
      </Grid>
      <Grid container item xs={3} direction="column">
        <Grid item>
          <FormControl fullWidth>
            <InputLabel htmlFor="price">Price{addAsterisk}</InputLabel>
            <OutlinedInput
              id="price"
              type="number"
              value={item.price}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleItemChange({ event, label: "price" })
              }
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Price"
              data-testid="priceInput"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item xs={3} direction="column">
        <Grid item>
          <TextField
            type="number"
            fullWidth
            id="quantity"
            label={`Quantity${addAsterisk}`}
            variant="outlined"
            value={item.quantity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleItemChange({ event, label: "quantity" })
            }
            data-testid="quantityInput"
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InventoryForm
