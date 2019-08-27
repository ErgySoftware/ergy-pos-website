import { red } from "@material-ui/core/colors"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
const fontFamily = [
  '"Helvetica Neue"',
  "sans-serif",
  '"Segoe UI"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  "-apple-system",
  "Roboto",
  "BlinkMacSystemFont",
  "Arial",
  '"Apple Color Emoji"',
].join(",")
// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    common: {
      black: "#333",
      white: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      gradient: "linear-gradient(150deg, #11998e 20%, #38ef7d 80%)",
    },
    text: {
      primary: "rgba(51, 51, 51, 0.87)",
      secondary: "rgba(51, 51, 51, 0.54)",
      disabled: "rgba(51, 51, 51, 0.38)",
      hint: "rgba(51, 51, 51, 0.38)",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 2048,
    },
  },
  typography: {
    fontFamily: fontFamily,
  },
})
theme = responsiveFontSizes(theme)
export default theme
