import { Routes, Route } from "react-router-dom"
import { routes } from "../../config/routes-config"
import { Box, Toolbar } from "@mui/material"

const styles = () => ({
  mainBox: {
    flexGrow: 1,
    bgcolor: "background.default",
    p: 3,
    padding: "0px 60px 0px 60px"
  }
})

const RouteWrapper = ({
  component: RouteComponent
}: {
  component: React.FC
}) => {
  return (
    <>
      <Toolbar />
      <RouteComponent />
    </>
  )
}

const Router = () => {
  const classes = styles()
  return (
    <Box component="main" sx={classes.mainBox}>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.route}
            element={<RouteWrapper component={route.component} />}
            key={route.key}
          />
        ))}
      </Routes>
    </Box>
  )
}

export default Router
