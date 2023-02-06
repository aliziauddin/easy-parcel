import * as React from "react"
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
import { InventoryAttributes } from "./InventoryModel"
import EditIcon from "@mui/icons-material/Edit"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import { useNavigate } from "react-router-dom"

const styles = () => ({
  table: { minWidth: 650 },
  tableRow: { "&:last-child td, &:last-child th": { border: 0 } }
})
const InventoryTable = ({
  inventoryItems
}: {
  inventoryItems: InventoryAttributes[]
}) => {
  const classes = styles()
  const navigate = useNavigate()
  return (
    <TableContainer>
      <Table sx={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventoryItems.map(
            (inventoryItem: InventoryAttributes, index: number) => (
              <TableRow
                key={inventoryItem.title + index}
                sx={classes.tableRow}
                data-testid="inventoryRowItems"
              >
                <TableCell align="left">{inventoryItem.title}</TableCell>
                <TableCell align="left">{inventoryItem.quantity}</TableCell>
                <TableCell align="left">{inventoryItem.price}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit Item">
                    <IconButton
                      // color="secondary"
                      component="label"
                      onClick={() =>
                        navigate(`/inventory/edit-item/?id=${inventoryItem.id}`)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Offer">
                    <IconButton
                      // color="secondary"
                      component="label"
                      onClick={() => navigate(`/offer/?id=${inventoryItem.id}`)}
                    >
                      <LocalOfferIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InventoryTable
