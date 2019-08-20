import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
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
    },
    text: {
      primary: "rgba(51, 51, 51, 0.87)",
      secondary: "rgba(51, 51, 51, 0.54)",
      disabled: "rgba(51, 51, 51, 0.38)",
      hint: "rgba(51, 51, 51, 0.38)",
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
