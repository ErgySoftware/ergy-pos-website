import theme from "../../theme"
import { makeStyles } from "@material-ui/core"

const useGlobalStyle = makeStyles(
  theme => ({
    "@global": {
      ".section": {
        padding: "10px   5vw",
        margin: "0 auto",
        [theme.breakpoints.up("xl")]: {
          padding: "24px calc(calc(100vw - 1200px) / 2)", // mantiene el ancho maximo en 1200px y permite backgound
        },
        [theme.breakpoints.up("xxl")]: {
          padding: "24px calc(calc(100vw - 1800px) / 2)",
        },
      },
    },
  }),
  { defaultTheme: theme }
)

export default useGlobalStyle
