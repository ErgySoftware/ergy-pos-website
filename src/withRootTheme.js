import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./theme"

export default Component => {
  const hocComponent = ({ ...props }) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return hocComponent
}
