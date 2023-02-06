import {
  Grid,
  List,
  Drawer,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Typography
} from "@mui/material"
import { Inventory, Discount } from "@mui/icons-material"
import { drawerWidth } from "../../utils/constants"
import { useNavigate, useLocation } from "react-router-dom"
import logo from "../../assets/parcel.png"

const styles = () => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box"
    }
  },
  logo: {
    padding: "16px 0px 16px 0px"
  }
})

const Sidebar = () => {
  const classes = styles()
  const navigate = useNavigate()
  const location = useLocation()
  const isSelected = (route: string) => {
    return route !== "/"
      ? location.pathname.includes(route)
      : location.pathname === route
  }
  const DrawerItems = [
    {
      title: "Products",
      icon: <Inventory color="primary" />,
      inActiveIcon: <Inventory />,
      action: () => navigate("/inventory"),
      route: "/inventory"
    },
    {
      title: "Offers",
      icon: <Discount color="primary" />,
      inActiveIcon: <Discount />,
      action: () => navigate("/offer"),
      route: "/offer"
    }
  ]
  return (
    <Drawer sx={classes.drawer} variant="permanent" anchor="left">
      <Grid
        sx={classes.logo}
        container
        justifyContent="center"
        textAlign="center"
      >
        <Grid item>
          <img
            width="30"
            height="30"
            src={logo}
            alt="logo_image"
            onClick={() => navigate("/")}
          />
        </Grid>
        <Grid item>
          <Typography variant="h5">EasyParcel</Typography>
        </Grid>
      </Grid>
      <Divider />
      <List>
        {DrawerItems.map((item, index) => (
          <ListItem
            alignItems="center"
            key={item.title + index}
            disablePadding
            onClick={item.action}
          >
            <ListItemButton>
              <ListItemIcon>
                {isSelected(item.route) ? item.icon : item.inActiveIcon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
