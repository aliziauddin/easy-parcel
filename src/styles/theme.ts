import { createTheme } from "@mui/material/styles"
import { grey } from "@mui/material/colors"

export const MobileView = "(max-width:1024px)"
export const createMaterialTheme = (color = "#FF6C59") => {
  return createTheme({
    palette: {
      primary: {
        main: "#F9278E",
        light: "#fff",
        dark: color,
        contrastText: "#fff"
      },
      secondary: {
        main: "#0693e3",
        light: grey[600]
      }
    },
    typography: {
      fontFamily: "'Poppins'",
      allVariants: {
        color: "#677294",
        fontWeight: 500
      },
      caption: {
        color: "#969696",
        fontSize: 12
      },
      h4: {
        fontWeight: "bold"
      },
      h6: {
        fontWeight: 500
      },
      subtitle2: {
        fontSize: 15,
        fontWeight: 500
      }
    },
    bg: {
      main: "#fff",
      light: "#F4F5F7"
    }
  })
}
