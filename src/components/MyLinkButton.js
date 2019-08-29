import React from "react"
import { Button } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby"

const Link = React.forwardRef(function Link(props, ref) {
  return <Button component={GatsbyLink} ref={ref} {...props} />
})

export default Link
