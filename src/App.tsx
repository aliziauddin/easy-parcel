import "./App.css"
import { Grid } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"
import Main from "./main/Main"
import InventoryContainer from "./main/context/inventory/InventoryContainer"
import OfferContainer from "./main/context/offer/OfferContainer"
import { ThemeMaker } from "./styles/ThemeMaker"

function App() {
  return (
    <Grid>
      <Router>
        <ThemeMaker>
          <InventoryContainer>
            <OfferContainer>
              <Main />
            </OfferContainer>
          </InventoryContainer>
        </ThemeMaker>
      </Router>
    </Grid>
  )
}

export default App
