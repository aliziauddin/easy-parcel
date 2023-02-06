import "styled-components"
import { Theme } from "@mui/material/styles"
interface CustomTheme {
  bg: {
    main: string
    light: string
  }
}

declare module "@mui/material/styles" {
  export interface Theme extends CustomTheme {}
  export interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
