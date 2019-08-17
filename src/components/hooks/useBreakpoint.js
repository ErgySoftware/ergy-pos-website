import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
export default function useBreakpoint(breakpoint) {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up(breakpoint))
}
