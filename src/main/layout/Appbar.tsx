import { AppBar, Toolbar, Typography } from "@mui/material"
import { drawerWidth } from "../../utils/constants"

const styles = () => ({
  appBar: { width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }
})
const Appbar = () => {
  const classes = styles()
  return (
    <AppBar
      position="fixed"
      sx={classes.appBar}
      color="transparent"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Easy Parcel
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
