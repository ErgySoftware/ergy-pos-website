import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: [
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
    ].join(","),
  },
})

export default theme
