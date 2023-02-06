import { Box } from "@mui/material"

import Routes from "./layout/Router"
import Sidebar from "./layout/Sidebar"

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Routes />
    </Box>
  )
}

export default Main
